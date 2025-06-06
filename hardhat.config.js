const { megaeth_testnet } = require('./config/networks');

require('dotenv').config();
require('@nomicfoundation/hardhat-ethers');

const { RPC_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: {
    compilers: [
      { version: '0.8.24', settings: { optimizer: { enabled: true, runs: 200 } } }, // OZ libs use ^0.8.20 so 0.8.24 is fine
    ],
  },
  defaultNetwork: 'megaeth_testnet',
  networks: {
    sepolia: {
      url: RPC_URL || 'https://ethereum-sepolia-rpc.publicnode.com',  // public fallback :contentReference[oaicite:7]{index=7}
      chainId: 11155111,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    hoodi: {
      url: process.env.HOODI_RPC || 'https://rpc.hoodi.ethpandaops.io',
      chainId: 560048,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    megaeth_testnet: { 
      url: megaeth_testnet.url || 'https://carrot.megaeth.com/rpc',
      chainId: megaeth_testnet.chainId || 6342,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
