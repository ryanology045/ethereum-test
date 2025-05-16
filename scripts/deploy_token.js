const { ethers } = require('hardhat');

async function main() {
  // ----- customise here ---------------------------------
  const NAME   = 'Anchor Governance Token';
  const SYMBOL = 'ANC';
  const SUPPLY = ethers.parseUnits('1000000', 18); // 1 M MTK
  // ------------------------------------------------------

  const Token = await ethers.getContractFactory('MyToken');
  const token = await Token.deploy(NAME, SYMBOL, SUPPLY);
  await token.waitForDeployment();

  console.log('\n🎉  Deployed at:', await token.getAddress());
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
