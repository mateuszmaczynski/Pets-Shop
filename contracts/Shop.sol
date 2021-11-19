// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./Item.sol";
import "./Delivery.sol";

/**
 * @title Shop is the main Pet Shop contract which is responsible
 * for shop's processes maintenace.
 */
contract Shop {
    address internal owner;
    mapping(string => Item) private items;

    event Buy(address indexed clientAddress, uint256 price);
    event NewItem(string indexed code, uint256 amount);

    struct Request {
        string code;
        uint256 amount;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    constructor() {
        owner = msg.sender;
    }

  /**
   * @notice The buy method
   * @dev Potential customer can use this function for buy a specific item.
   * It has getDelivery function dedicated for delivery request. 
   * @param _requests The tuple with items request
   */
    function buy(Request[] memory _requests) public payable {
        uint256 allPrice = 0;

        for (uint256 i; i < _requests.length; i++) {
            uint256 inter = items[_requests[i].code].getPrice() *
                _requests[i].amount;
            console.log("Trying to send %s", _requests[i].code);
            allPrice = allPrice + inter;
        }

        require(msg.value >= allPrice, "The msg value is not suffient");

        for (uint256 i; i < _requests.length; i++) {
            if (address(items[_requests[i].code]).balance <= 10) {
                // If balance of a item is below or equal 10 create new delivery request 
//                getDelivery(_requests[i].code);
            }
            items[_requests[i].code].transfer(msg.sender, _requests[i].amount);
        }

        emit Buy(msg.sender, msg.value);

        /*    console.log("Token balance is %s", address(this).balance);
        withdraw();
        console.log("Token balance is %s", address(this).balance);
    */
    }

  /**
   * @notice The createNewItem method
   * @dev It allows for creating of new item only shop's owner can
   * use this function.
   * @param _name A name of an item
   * @param _code A symbol of an item
   * @param _amount An amount of an item
   * @param _price A price of an item
   */
    function createNewItem(
        string memory _name,
        string memory _code,
        uint256 _amount,
        uint256 _price
    ) public onlyOwner {
        items[_code] = new Item(_name, _code, _amount, _price);
        emit NewItem(_code, _amount);
    }

  /**
   * @notice The getItemPrice method
   * @dev It allows for geting an item price
   * @param _code A symbol of an item
   */
    function getItemPrice(string memory _code) public view returns (uint256) {
        return items[_code].getPrice();
    }

  /**
   * @notice The getItem method
   * @dev It allows for geting an item structure
   * @param _code A symbol of an item
   */
    function getItem(string memory _code) public view returns (Item) {
        return items[_code];
    }

  /**
   * @notice The getDelivery method
   * @dev It allows for creating new delivery request
   * for a specyfic item 
   * @param _code A symbol of an item
   */
    function getDelivery(string memory _code) internal {
        Delivery(0x2FD99142A2ac86b0f15cd3B0FF39df5Cce43772d).createRequestTo(
            "http://test/getDelivery",
            _code
        );
    }


  /**
   * @notice The withdraw method
   * @dev It allows for withdraw funds from contract.
   * Only contract's owner can use this method
   */
    function withdraw() public onlyOwner {
        payable(owner).transfer(address(this).balance);
    }
}
