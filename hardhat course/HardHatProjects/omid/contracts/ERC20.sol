// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./SafeMath.sol";
import "./IERC20.sol";
import "./IERC20Metadata.sol";
import "./Context.sol";

contract ERC20 is Context, IERC20 , IERC20Metadata
{
    using SafeMath for uint256;

    mapping (address => uint256) private _balances;

    mapping (address => mapping (address =>uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name;

    string private _symbol;

    uint8 private _decimals; 


    constructor (string memory name_, string memory symbol_, uint8 decimals_)
    {
        _name = name_;
        _symbol = symbol_;
        _decimals = decimals_; 
    }



        // view functions //

    function name() public view virtual override returns(string memory)
    {
        return _name;
    }

    function symbol() public view virtual override returns(string memory)
    {
        return _symbol;
    }

    function decimals() public view virtual override returns(uint8)
    {
        return _decimals;
    }

    function totalSupply() public view virtual override returns(uint256)
    {
        return _totalSupply;
    }

    function balanceOf(address account) public view virtual override returns(uint256)
    {
        return _balances[account];
    } 
    
        // override functions //

    function transfer (address to, uint256 amount) public virtual override returns(bool)
    {
        address owner = _msgSender();
        _transfer (owner, to , amount);
        return true;
    }

    function allowance (address _Owenr, address _Spender) public view virtual override returns(uint256)
    {
        return _allowances [_Owenr][_Spender];
    }
    
    function approve (address spender, uint amount) public virtual override returns(bool)
    {
        address owner = _msgSender();
        _approve (owner, spender, amount);
        return true;
    }
    
    function transferFrom(address from, address to, uint256 amount) public virtual override returns(bool)
    {
        address spender = _msgSender();
        uint currenAllowance = allowance(from, spender); 

        require (currenAllowance >= amount , "@dev : insufficient allowance");

        _approve (from, spender, currenAllowance.sub(amount));

        _transfer (from, to, amount);
        return true;
    }



        // overloading functions //
    function _transfer(address from , address to, uint256 amount) internal virtual
    {
        require (from != address(0) ,"@dev : transfer from the zero address");
        require (to != address(0), "@dev : transfer to the zero address"); 
        
        uint fromBalance = _balances[from];
        require (fromBalance >= amount,"@dev : transfer amount exceeds balance");

        _balances [from] = fromBalance.sub(amount);
        _balances [to] = _balances[to].add(amount);

        emit Transfer (from, to, amount);
    }

    function _mint (address account, uint256 amount) internal virtual {
        require (account != address(0), "@dev : mint to the zero address");

        _totalSupply = _totalSupply.add(amount);
        _balances [account] = _balances[account].add(amount);

        emit Transfer (address(0), account, amount);
    }

    function _approve(address owner, address spender, uint256 amount) internal virtual
    {
        require (owner != address(0), "@dev : approve from the zero address");
        require (spender != address(0), "@dev : approve to the zero address");

        _allowances [owner][spender] = amount;

        emit Approval (owner, spender, amount);
    }

}