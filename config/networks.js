// config/networks.js
require('dotenv').config();

const { PRIVATE_KEY } = process.env;        // one key works on every chain

// helper to avoid repeating ourselves
const makeNet = (url, chainId) => ({
  url,
  chainId,
  accounts: PRIVATE_KEY ? [`0x${PRIVATE_KEY}`] : [],
});

module.exports = {
  // Ethereum
  // sepolia:   makeNet(process.env.SEPOLIA_RPC   || 'https://ethereum-sepolia-rpc.publicnode.com', 11155111),

  megaeth_testnet: makeNet(process.env.MEGAETH_TESTNET_RPC || '	https://carrot.megaeth.com/rpc', 6342), 

  // Arbitrum
  // arbitrum:  makeNet(process.env.ARBITRUM_RPC  || 'https://arb1.arbitrum.io/rpc',                 42161),  // :contentReference[oaicite:0]{index=0}

  // Optimism
  // optimism:  makeNet(process.env.OPTIMISM_RPC  || 'https://mainnet.optimism.io',                   10),     // :contentReference[oaicite:1]{index=1}

  // Base
  // base:      makeNet(process.env.BASE_RPC      || 'https://mainnet.base.org',                      8453),   // :contentReference[oaicite:2]{index=2}

  // Scroll
  // scroll:    makeNet(process.env.SCROLL_RPC    || 'https://rpc.scroll.io/',                        534352), // :contentReference[oaicite:3]{index=3}

  // Polygon PoS
  // polygon:   makeNet(process.env.POLYGON_RPC   || 'https://polygon-rpc.com',                       137),    // :contentReference[oaicite:4]{index=4}
};
