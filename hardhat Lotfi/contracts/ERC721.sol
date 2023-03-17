// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IERC721.sol";

contract ERC721 is IERC721
{
    string private _name;
    string private _symbol;

    address public _owner ;

    uint internal mintCounter;
    // mapping

    mapping (uint256 => address) private _owners;

    mapping (address => uint256) private _balances;

    mapping (uint256 => address) private _tokenApprovals;

    mapping (uint256 => string) internal _tokenURIs;

    mapping (address => mapping (address => bool)) private _operatorApprovals;

    
    constructor (string memory name_, string memory symbol_)
    {
        _name = name_;
        _symbol = symbol_;
        _owner = msg.sender;
    }

    modifier onlyOwner () 
    {
        require(msg.sender == _owner, "only owner access this funcion");
        _;
    }


        // function overrides //

    function balanceOf(address owner) public view virtual override returns (uint256 balance)
    {
        require(owner != address(0), "@dev : address zero is not a valid owner");
        return _balances[owner];
    }

    function ownerOf(uint256 tokenId) public view virtual override returns(address)
    {
        address owner = _owners[tokenId];
        require(owner != address(0),"@dev : address zero is not a valid owner");
        return owner;
    }

    function approve(address to,uint256 tokenId) public virtual override{
        address owner = _owners[tokenId];
        require(to != owner ,"@dev : approval to current owner");
        require(msg.sender == owner || isApprovedForAll (owner, msg.sender), 
        "@dev: approve caller is not token owenr or approved for all");

        _approve(to, tokenId);
    }

    function getApproved(uint256 tokenId) public view virtual override returns(address operator)
    {
        _requireMined(tokenId);

        return _tokenApprovals[tokenId];
    }

    function setApprovalForAll(address operator, bool _approved) public virtual override
    {
        // _setApprovalForAll
    }

    function isApprovedForAll(address owner,address operator) public view virtual override returns(bool)
    {
        return _operatorApprovals[owner][operator];
    }

    function transferFrom(address from,address to,uint256 tokenId) public virtual override
    {
        require(_isApprovedOrOwner(msg.sender, tokenId), "@dev : caller is not token owner or approved");

        _transfer(from, to, tokenId);
    }

    function safeTransferFrom(address from,address to,uint256 tokenId) public 
    {
        safeTransferFrom(from, to, tokenId, "");
    }

    function safeTransferFrom(address from,address to,uint256 tokenId,bytes memory _data) public
    {
        _safeTransfer(from, to, tokenId);
    }


    function supportsInterface(bytes4 interfaceId) external pure virtual returns (bool)
    {
        return (interfaceId == interfaceId);
    }

    function name() public view virtual returns(string memory)
    {
        return _name;
    }
    function symbol () public view virtual returns(string memory)
    {
        return _symbol;
    }

    function baseURI () public pure returns(string memory)
    {
        return "";
    }

    function tokenURI (uint256 tokenId) public view returns (string memory)
    {
        require(_owners[tokenId] != address(0), "@dev : token id does not exist");
        return _tokenURIs[tokenId];
    }

        // overloading functions //

    function _approve (address to , uint256 tokenId) internal virtual
    {
        _tokenApprovals[tokenId] = to;
        emit Approval(ERC721.ownerOf(tokenId), to, tokenId);
    }

    function _requireMined (uint tokenId) internal view virtual
    {
        require(_exists(tokenId), "@dev : invalid token ID");
    }

    // _safeTransferFrom(from, to, tokenId, _data)

    function _exists(uint256 tokenId) internal view virtual returns(bool)
    {
        address owner = _owners[tokenId];
        return owner != address(0);
    }

    function _setApprovalForAll (address owner , address operator, bool approved) internal virtual
    {
        require(owner != operator, "@dev : approve to caller");
        _operatorApprovals[owner][operator] = approved;
        emit ApprovalForAll(owner, operator, approved);
    }

    function _isApprovedOrOwner(address spender,uint256 tokenId) internal view virtual returns(bool)
    {
        address owner = ERC721.ownerOf(tokenId);
        return (spender == owner || isApprovedForAll(owner, spender) || getApproved(tokenId) == spender);
    }

    function _safeMint(address to,uint256 tokenId) internal virtual
    {
        _safeMint(to, tokenId, "");
    }

    function _safeMint(address to,uint256 tokenId,bytes memory _data) internal virtual
    {
        _mint(to, tokenId);
    }

    function _mint(address to,uint256 tokenId) internal virtual
    {
        require(to != address (0), "@dev : mint to the address zero");
        require (!_exists(tokenId),"@dev : token already minted");

        _balances[to] += 1;

        _owners [tokenId] = to;

        mintCounter++;

        emit Transfer(address(0), to, tokenId);
    }

    // _burn(owner, tokenId)

    // _burn(tokenId)

    function setTokenURI (uint tokenId, string memory tokenURI_) public onlyOwner 
    {
        _tokenURIs[tokenId] = tokenURI_;
    }

    function _safeTransfer (address from,address to,uint256 tokenId) internal virtual
    {
        _transfer(from, to, tokenId);
    }

    function _transfer (address from ,address to , uint256 tokenId) internal virtual
    {
        require(ERC721.ownerOf(tokenId) == from, "@dev : transfer from incorrect owner");
        require(to != address (0), "@dev : transfer to the zero address" );

        delete _tokenApprovals[tokenId];

        _balances [from] -= 1;
        _balances [to] += 1;

        _owners [tokenId] = to;

        emit Transfer(from, to, tokenId);
    }


}