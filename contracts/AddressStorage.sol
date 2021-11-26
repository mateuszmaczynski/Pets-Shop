// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title AddressStorage is ERC20 tokens address storage contract
 */
contract AddressStorage {
    mapping(string => address) private tokens;
    address private owner;

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    /**
     * @notice The setOwner method
     * @dev It allows for set an owner of this smart contract.
     * @param _owner An address of a new owner of this smart contarct
     */
    function setOwner(address _owner) external onlyOwner {
        owner = _owner;
    }

    /**
     * @notice The getOwner method
     * @dev It allows for get an address of smart contarct owner.
     */
    function getOwner() external view onlyOwner returns (address) {
        return owner;
    }

    /**
     * @notice The setTokenAddress method
     * @dev It allows for setting an address of a specific 
     * smart contarct in the ERC20 standar.
     * @param _code An code of an contract
     * @param _tokenAddress An address of a smart contract
     */
    function setTokenAddress(string memory _code, address _tokenAddress)
        external
        onlyOwner
    {
        tokens[_code] = _tokenAddress;
    }

    /**
     * @notice The getTokenAddress method
     * @dev It allows to get an address of a specific 
     * smart contarct in the ERC20 standar.
     * @param _code An code of an contract
     */
    function getTokenAddress(string memory _code)
        external
        view
        onlyOwner
        returns (address tokenAddress)
    {
        return tokens[_code];
    }
}