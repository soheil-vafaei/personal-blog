// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./IERC20.sol";
import "./SafeMath.sol";
import "./Context.sol";
import "./Ownable.sol";

contract ERC20 is Context , Ownable ,IERC20
{
    using SafeMath for uint256 ;

        // mapping // 

    // return balance 
    mapping 
    (address => uint256)
    _balances;

    mapping 
    (address => mapping(address => uint256)) 
    _allowances;

    mapping 
    (address => bool) _isBadActor;

        // uint //

    uint private _totalSupply;
    uint private _decimalse = 9;

        // string // 
    
    string private _name = "T_Rex Token";
    string private _symbol = "TREX";

        // bool //
    bool saleStatus;
    
        // function view // 

    function name
    () 
    public view virtual 
    returns(string memory) 
    {
        return _name;
    }
    
    function symbol 
    () 
    public view virtual 
    returns(string memory)
    {
        return _symbol;
    }

    function decimals
    () 
    public view virtual 
    returns(uint)
    {
        return _decimalse;
    }

    function totalSupply 
    () 
    public view virtual override 
    returns(uint)
    {
        return _totalSupply;
    }

    function balanceOf
    (address account) 
    public view virtual override 
    returns(uint256)
    {
        return _balances[account];
    }

        // functions // 
    
    function _transfer (address from, address to, uint256 amount)
    internal virtual 
    {
        require(!_isBadActor[from] && !_isBadActor[to], "Bots are not allowed");
        require(saleStatus, "the sale is not open");
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");

        
        uint256 fromBalance = _balances[from];
        require(fromBalance >= amount , "ERC20: transfer amount exceeds balance");

        _balances[from] = _balances[from].sub(amount);
        _balances[to] = _balances[to].add(amount);

        emit Transfer(from, to, amount);
    }

    function _approve (address owner, address spender, uint256 amount)
    internal virtual
    {
        require(owner != address(0), "ERC20: approve owner the zero address");
        require(spender != address (0), "ERC20: approve spender the zero address");

        _allowances[owner][spender] = amount;

        emit Approval(owner, spender, amount);
    }

    function set_sale_status(bool _status) public onlyOwner returns(bool) {
        saleStatus = _status;
        return true;
    }

    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");

        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);

    }

    function _burn(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: burn from the zero address");

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            _balances[account] = accountBalance - amount;
        }
        _totalSupply -= amount;

        emit Transfer(account, address(0), amount);
        
    }

    function badActorSet(address account, bool isBadActor) external onlyOwner{
        require (account != owner(), "The owner address cannot be set as a robot");
        _isBadActor[account] = isBadActor;
    }
    
    function checkBadActor(address account) public view returns(bool){
        return _isBadActor[account];
    }

        // function override //

    function transfer 
    (
    address to,
    uint256 amount
    )
    public virtual override returns(bool)
    {
        address from = _msgSender();
        _transfer(from, to, amount);

        return true;
    }

    function allowance(address owner, address spender)
    public view virtual override returns(uint256)
    {
        return _allowances[owner][spender];
    }


    function approve (address spender, uint256 amount)
    public virtual override returns(bool)
    {
        address owner = _msgSender();
        _approve(owner, spender, amount);

        return true;
    }

    function transferFrom 
    (
    address from,
    address to, 
    uint256 amount
    )
    public virtual override returns(bool)
    {
        address spender= _msgSender();
        require(amount <= _allowances[from][spender]);
        _allowances[from][spender] = _allowances[from][spender].sub(amount);

        _transfer(from, to, amount);

        return true;
    }
}