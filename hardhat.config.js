require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { PRIVATE_KEY, RPC_URL_0G } = process.env;

if (!PRIVATE_KEY || !RPC_URL_0G) {
  console.error("Harap set PRIVATE_KEY dan RPC_URL_0G di dalam file .env");
  process.exit(1);
}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    og_testnet: {
      url: RPC_URL_0G,
      accounts: [PRIVATE_KEY],
    },
  },
};
