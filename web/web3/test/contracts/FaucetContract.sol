// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

contract Faucet
{
    uint public number ;

    function setNumber(uint _a) public{
        number = _a;
    }
}

// const instance = await Faucet.deployed()
// instance.addFunds ({value : "1000000000000000000", from : accounts[0]})
// instance.withdraw("100000000000000000", {from : accounts[0]})
