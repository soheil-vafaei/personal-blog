// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC721.sol";

contract Collection is ERC721
{
    constructor ( string memory _URI) ERC721 ("mehran", "MHR")
    {
        _safeMint(msg.sender, mintCounter);
        _tokenURIs [mintCounter] = _URI; 
    }

    function mint (string memory _URI) public onlyOwner
    {
        _safeMint(msg.sender, mintCounter);
        _tokenURIs [mintCounter] = _URI;
    }
}