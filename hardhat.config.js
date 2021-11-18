require('dotenv').config();
require("@nomiclabs/hardhat-ethers");


const KOVAN_URL = process.env.KOVAN_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */


module.exports = {
  defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            // // If you want to do some forking, uncomment this
            // forking: {
            //   url: MAINNET_RPC_URL
            // }
        },
        kovan: {
          url: KOVAN_URL,
          accounts: [PRIVATE_KEY],
        },
        localhost: {
        },
    },
  solidity: "0.8.0",
};
