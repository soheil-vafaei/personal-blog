// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./IERC20.sol";

contract ERC20 is IERC20
{
        // variables //

    uint256 private _totalSupply;
    string private _name;
    string private _symbol;
    uint8 private _decimals;

    address public _owner;
    
        // mappings //
    
    mapping (address => uint256) private _balances ;
    mapping (address => mapping (address => uint256)) private _allowances;

        // constructor

    constructor (string memory name_,string memory symbol_, uint8 decimals_)
    {
        _name = name_;
        _symbol = symbol_;
        _decimals = decimals_;
        _owner = msg.sender;
    }

    modifier onlyOwner() 
    {
        require(msg.sender == _owner , "@dev : only owner can call this function");
        _; 
    }

    function name () public view virtual returns(string memory)
    {
        return _name;
    }

    function symbol () public view virtual returns(string memory)
    {
        return _symbol;
    }

    function decimals() public view virtual returns(uint8){
        return _decimals;
    }


        // overrides function //

    function totalSupply() public view virtual override returns(uint256)
    {
        return _totalSupply;
    }

    function balanceOf(address account) public view virtual override returns(uint256)
    {
        return _balances[account];
    }

    function transfer(address to,uint256 amount) public virtual override returns(bool)
    {
        address owner = msg.sender;
        _transfer(owner, to, amount);
        return true;
    }

    function allowance(address owner, address spender)public view virtual override returns(uint256)
    {
        return _allowances[owner][spender];
    }

    function approve(address spender, uint256 amount) public virtual override returns(bool)
    {
        address owner = msg.sender;
        _approve(owner, spender, amount);
        return true;
    }

    function transferFrom(address from,address to,uint256 amount) public virtual override returns(bool)
    {
        address spender = msg.sender;
        uint256 currenAllowance = allowance(from, spender); // 0 // 5 // 3 // 2

        require(currenAllowance  >= amount , "@dev : insufficient allowance");
        _approve(from, spender, currenAllowance - amount);

        _transfer(from, to, amount);

        return true;
    }


        // overloading function //

    function _transfer 
    (
        address from,
        address to,
        uint256 amount
    ) 
        internal virtual
    {
        // 0x0000000000000000000000000......
        require(from != address(0), "@dev : transfer from the zero address"); // mint
        require(to != address(0), "@dev : transfer to the zero address"); // bern

        uint256 fromBalance = _balances[from];
        require(fromBalance >= amount , "@dev : transfer amount exceeds balance");

        _balances [from ] = fromBalance - amount;
        _balances [to] += amount;

        emit Transfer(from, to, amount);
    }

    function _mint (address account ,uint amount) internal virtual
    {
        require(account != address(0), "@dev : mint to the zero address");

        _totalSupply += amount;

        _balances[account] += amount;

        emit Transfer(address(0), account, amount);
    }

    function _approve 
    (
        address owner,
        address spender,
        uint256 amount 
    ) internal virtual
    {
        require(owner != address(0), "@dev : approve from the zero address");
        require(spender != address(0), "@dev : approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }
}
