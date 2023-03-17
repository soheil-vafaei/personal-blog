// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

import "./Owned.sol";
import "./Logger.sol";
import "./IFaucet.sol";

contract Faucet is Owned, Logger, IFaucet
{
    mapping (address => bool) private funders;
    mapping (uint => address) private lutFunders;

    uint public numOfFunders;
    
    modifier limitWithdraw(uint amount)
    {
        require(amount <= 100000000000000000,"cannot withraw more than 0.1 ether");
        _;
    }

    receive () external payable {}

    function addFunds () external override payable {
        address funder = msg.sender;
        if (!funders[funder])
        {
            uint index = numOfFunders++;
            funders[funder] = true;
            lutFunders[index] = funder;
        }
    }

    function transferOwnerShip (address newOwner) external onlyOwner {
        owner = newOwner;
    }

    function withdraw (uint amount) external override limitWithdraw(amount) onlyOwner
    {
        payable(msg.sender).transfer(amount);
    }

    function getFundersAtIndex(uint8 i)external view returns(address) {
        return lutFunders[i];
    }


    function getAllFunders () external view returns(address [] memory)
    {
        address [] memory _funder = new address[](numOfFunders);
        for (uint i = 0 ; i < numOfFunders; i ++)
        {
            _funder[i] = lutFunders[i];
        }
        return _funder;

    }
    function emitLog () external pure override returns(bytes32)
    {
        return "Hello World";
    }
}

// const instance = await Faucet.deployed()
// instance.addFunds ({value : "1000000000000000000", from : accounts[0]})
// instance.withdraw("100000000000000000", {from : accounts[0]})
