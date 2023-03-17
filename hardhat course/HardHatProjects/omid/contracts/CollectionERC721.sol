// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC721.sol";
import "./Ownable.sol";

contract CollectionERC721 is ERC721, Ownable
{
    constructor (string memory _name, string memory _symbol) ERC721 (_name, _symbol)
    {}
    
    function setTokenURIs (uint256 tokenId, string memory tokenURI_) public onlyOwner
    {
        _tokenURIs [tokenId] = tokenURI_;
    }

    function mint (address to, string memory _URI) public onlyOwner 
    {
        _safeMint(to, mintCounter);
        setTokenURIs(mintCounter, _URI);

        mintCounter++;
    }
}