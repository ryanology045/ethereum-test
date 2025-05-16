const { ethers } = require('hardhat');

async function main() {
  // --- config ------------------------------------
  const token = '0xYourERC20Address';          // e.g. USDC test token
  const to    = '0xRecipientAddr';
  const amount = '10.0';                       // human-readable

  // -----------------------------------------------
  const signer = (await ethers.getSigners())[0];
  const erc20  = await ethers.getContractAt(
    '@openzeppelin/contracts/token/ERC20/IERC20.sol:IERC20',
    token,
    signer
  );

  const decimals = await erc20.decimals();
  const tx = await erc20.transfer(
    to,
    ethers.parseUnits(amount, decimals)
  );

  console.log(`⏳  sent, waiting… hash=${tx.hash}`);
  await tx.wait();
  console.log('✅  done!');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
