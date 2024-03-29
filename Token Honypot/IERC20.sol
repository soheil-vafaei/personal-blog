// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

// IERC20

interface IERC20
{  
            // functions // 

    // return total supply
    function totalSupply() external view returns(uint256);

    // return balance tokens of address account
    function balanceOf(address account) external view returns(uint256);

    // transfer from msg.sender to (address to) 
    function transfer 
    (
    address to,
    uint256 amount
    )
    external returns(bool);

    function allowance(address owner, address spender)
    external view returns(uint256);


    function approve (address spender, uint256 amount)
    external returns(bool);

    function transferFrom 
    (
    address from,
    address to, 
    uint256 amount
    )
    external returns(bool);

        // events // 


    event Transfer (address indexed from , address indexed to , uint256 value);

    event Approval (address indexed owner, address indexed spender, uint256 value);
}
