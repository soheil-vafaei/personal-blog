// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IERC721.sol";

contract ERC721 is IERC721
{
        // variables //     
    
    string private _name ;
    string private _symbol;
    address private _owner;

    uint internal mintCounter;

        // mappings //
    
    mapping (uint256 => address) internal _owners;
    mapping (address => uint256 ) private _balances;
    mapping (uint256 => address) private _tokenApprovals;
    mapping (address => mapping(address => bool)) private _operatorApprovals;
    mapping (uint256 => string) internal _tokenURIs;

        // constructor //

    constructor (string memory name_, string memory symbol_)
    {
        _name = name_;
        _symbol = symbol_;
    }

    function name  () public view virtual returns(string memory)
    {
        return _name;
    }

    function symbol () public view virtual returns(string memory)
    {
        return _symbol;
    }

    function baseURI () public view virtual returns(string memory)
    {
        return "";
    }

    function tokenURI (uint256 tokenId) public view virtual returns(string memory)
    {
        return _tokenURIs[tokenId];
    }


        // function overrides //


    function balanceOf (address owner) public view virtual override returns(uint256)
    {
        require (owner != address(0), "@dev : address zero is not valid owner");
        return _balances[owner];
    }

    function ownerOf(uint256 tokenId) public view virtual override returns(address)
    {
        address owner = _owners[tokenId];
        require(owner != address(0),"@dev : owner query for nonexistent token");
        return owner;
    }

    function approve(address to,uint256 tokenId) public virtual override{
        address owner = ownerOf(tokenId);
        require (to != owner , "@dev : approval to current owner");
        require (msg.sender == owner || isApprovedForAll(owner, msg.sender), "@dev : approve caller is not token owner or approved all ");
        _approve (to, tokenId);
    }

    function getApproved(uint256 tokenId) public view virtual override returns(address)
    {
        _requireMinted(tokenId);

        return _tokenApprovals[tokenId];
    }

    function setApprovalForAll(address operator,bool approved) public virtual override{
        _setApprovalForAll(msg.sender, operator, approved);
    }

    function isApprovedForAll(address owner, address operator) public view virtual override returns(bool)
    {
        return _operatorApprovals[owner][operator];
    }

    function transferFrom(address from,address to, uint256 tokenId) public virtual override 
    {
        require(_isApprovedOrOwner(msg.sender, tokenId), "@dev : caller is not token owner or approved" );

        _transfer(from, to, tokenId);
    }

    function safeTransferFrom(address from,address to, uint256 tokenId) public virtual override
    {
        // safeTransferFrom(from, to, tokenId, "");
    }

    function safeTransferFrom(address from,address to,uint256 tokenId,bytes memory _data) public virtual override
    {
        require(_isApprovedOrOwner(msg.sender, tokenId), "@dev : caller is not token owner or approved from owner");
        _safeTransferFrom(from, to, tokenId, _data);
    }


        // overloading functions //
        
    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool)
    {
        return interfaceId == interfaceId;
    }

    function _approve (address to,uint256 tokenId) internal virtual{
        _tokenApprovals[tokenId] = to;
        emit Approval(ownerOf(tokenId), to, tokenId);
    }

    function _requireMinted (uint256 tokenId)internal view virtual
    {
        require(_exists(tokenId),"@dev : invalid token id");
    }

    function _exists(uint256 tokenId) internal view virtual returns(bool)
    {
        return _owners[tokenId] != address(0);
    }

    function totalSupply () public virtual view returns (uint256)
    {
        return mintCounter;
    }

    function _setApprovalForAll (address owner,address operator, bool approved) internal virtual
    {
        require (owner != operator, "@dev : approve to caller" );
        _operatorApprovals[owner][operator] = approved;
        emit ApprovalForAll(owner, operator, approved);
    }

    function _isApprovedOrOwner(address spender,uint256 tokenId) internal view virtual returns(bool)
    {
        address owner = ownerOf(tokenId);
        return (spender == owner || isApprovedForAll(owner, spender) || getApproved(tokenId) == spender);
    }

    function _safeMint(address to, uint256 tokenId) internal virtual {
        _safeMint(to, tokenId, "");
    }

    function _safeMint(
        address to,
        uint256 tokenId,
        bytes memory data
    ) internal virtual {
        _mint(to, tokenId);
    }

    function _mint(address to, uint256 tokenId) internal virtual {
        require(to != address(0), "ERC721: mint to the zero address");
        require(!_exists(tokenId), "ERC721: token already minted");

        _balances[to] += 1;
        _owners[tokenId] = to;

        emit Transfer(address(0), to, tokenId);
    }

    function _safeTransferFrom(address from,address to, uint256 tokenId, bytes memory data) internal virtual
    {
        _transfer(from, to, tokenId);
    }

    function _transfer (address from ,address to , uint256 tokenId) internal virtual
    {
        require (ownerOf(tokenId) == from, "@dev : transfer from incorret owner" );
        require (to != address (0), "@dev : transfer to address zero" );

        delete _tokenApprovals[tokenId];

        _balances[from] -= 1;
        _balances[to] += 1;

        _owners[tokenId] = to;

        emit Transfer(from, to, tokenId);
    }


}