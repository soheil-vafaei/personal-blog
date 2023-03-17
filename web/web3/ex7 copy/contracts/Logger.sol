// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

abstract contract Logger
{
    function emitLog () external virtual pure returns(bytes32);
}