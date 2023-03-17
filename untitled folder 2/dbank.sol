// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DBank 
{
    address [] costomer;
    
    mapping (address => string) costomerNames;
    mapping (address => bool) userAccount;
    mapping (address => mapping (uint => uint)) LockTime;
    mapping (address => uint) valueLock;

    address payable owner;

    constructor (){
        owner = payable( msg.sender);
    }

    uint fee = 1 ether;

    modifier User()
    {
        require (userAccount[msg.sender], "msg sender is not user (dev : plase create account)");
        _;
    }
    
    function CreateAccount (string memory name) public 
    {
        require (msg.sender != address(0), "Address is zero");
        require (!userAccount[msg.sender], "youre address in user now");

        costomer.push(msg.sender);
        costomerNames[msg.sender]=name;
        userAccount [msg.sender] = true;
    }

    function Lock (uint lockTime, uint amount) public payable User
    {
        uint _lockTime = block.timestamp + lockTime;

        LockTime [msg.sender][amount] = _lockTime;

        valueLock [msg.sender]= amount;

        require(msg.value == amount , "Inventory is not enough to lock the amount you specified");
    }

    function Unlock () public payable User
    {
        uint allAmount = valueLock [msg.sender];
        require (block.timestamp >= LockTime[msg.sender][allAmount], "Lock time is not over yet" );
        
        uint valueUser = valueLock [msg.sender] - fee; // 10 - 1 // 9 ether
        // uint feeOwner = valueLock [msg.sender] - valueUser ; // 10 - 9 = 1
        uint feeOwner = fee;

        address useraddress = msg.sender;
        
        (bool success, ) = useraddress.call{value: valueUser}("");
        require(success, "Transfer failed.");

        owner.transfer(feeOwner);
    }

}
