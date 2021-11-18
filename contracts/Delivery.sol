/** This example code is designed to quickly deploy an example contract using Remix.
 *  If you have never used Remix, try our example walkthrough: https://docs.chain.link/docs/example-walkthrough
 *  You will need testnet ETH and LINK.
 *     - Kovan ETH faucet: https://faucet.kovan.network/
 *     - Kovan LINK faucet: https://kovan.chain.link/
 */

pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title APIConsumer is an example contract which requests data from
 * the Chainlink network
 * @dev This contract is designed to work on multiple networks, including
 * local test networks
 */
contract Delivery is ChainlinkClient, Ownable {
    using Chainlink for Chainlink.Request;
  uint256 public data;


   constructor() {
        setPublicChainlinkToken();
      //  oracle = 0xf4316Eb1584B3CF547E091Acd7003c116E07577b;
       // jobId = "2e37b8362f474fce9dd019fa195a8627";
       // fee = 0.1 * 10 ** 18; // (Varies by network and job)
  }

  /**
   * @notice Returns the address of the LINK token
   * @dev This is the public implementation for chainlinkTokenAddress, which is
   * an internal method of the ChainlinkClient contract
   */
  function getChainlinkToken() public view returns (address) {
    return chainlinkTokenAddress();
  }

  function createRequestTo(
    string memory _url,
    string memory _code
    )
    public
    onlyOwner
    returns (bytes32 requestId)
  {
      address _oracle = 0xf4316Eb1584B3CF547E091Acd7003c116E07577b;
      bytes32 _jobId = "2e37b8362f474fce9dd019fa195a8627";
      uint256 _payment = 0.1 * 10 ** 18;

    Chainlink.Request memory req = buildChainlinkRequest(_jobId, address(this), this.fulfill.selector);
    req.add("url", _url);
    req.add("path", _code);
    req.addInt("times", 100);
    requestId = sendChainlinkRequestTo(_oracle, req, _payment);
  }

  /**
   * @notice The fulfill method from requests created by this contract
   * @dev The recordChainlinkFulfillment protects this function from being called
   * by anyone other than the oracle address that the request was sent to
   * @param _requestId The ID that was generated for the request
   * @param _data The answer provided by the oracle
   */
  function fulfill(bytes32 _requestId, uint256 _data)
    public
    recordChainlinkFulfillment(_requestId)
  {
    data = _data;
  }

  /**
   * @notice Allows the owner to withdraw any LINK balance on the contract
   */
  function withdrawLink() public onlyOwner {
    LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
    require(link.transfer(msg.sender, link.balanceOf(address(this))), "Unable to transfer");
  }

  /**
   * @notice Call this method if no response is received within 5 minutes
   * @param _requestId The ID that was generated for the request to cancel
   * @param _payment The payment specified for the request to cancel
   * @param _callbackFunctionId The bytes4 callback function ID specified for
   * the request to cancel
   * @param _expiration The expiration generated for the request to cancel
   */
  function cancelRequest(
    bytes32 _requestId,
    uint256 _payment,
    bytes4 _callbackFunctionId,
    uint256 _expiration
  )
    public
    onlyOwner
  {
    cancelChainlinkRequest(_requestId, _payment, _callbackFunctionId, _expiration);
  }
}
