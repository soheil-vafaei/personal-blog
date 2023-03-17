// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

contract Owned
{
    address public owner;   


    modifier onlyOwner() {
        require(msg.sender == owner , "only owner access this function");
        _;
    }

    constructor (){
        owner = msg.sender;
    }
}