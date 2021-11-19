// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title Item is a shop's product contract
 * @dev It based on ERC20 interface
 */
contract Item is ERC20 {
    uint256 price;
    address internal owner;

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    constructor(
        string memory name,
        string memory symbol,
        uint256 _amount,
        uint256 _price
    ) ERC20(name, symbol) {
        owner = msg.sender;
        price = _price;
        _mint(msg.sender, _amount);
    }


  /**
   * @notice The addItem method
   * @dev It allows for adding new item to 
   * item's balance. Only an contract's owner can use this method
   * @param _amount An amount of an item
   */
    function addItem(uint256 _amount) public onlyOwner returns (bool) {
        _mint(msg.sender, _amount);
        return true;
    }

  /**
   * @notice The getPrice method
   * @dev It is geter for an item price
   */
    function getPrice() public view returns (uint256) {
        return price;
    }
}
