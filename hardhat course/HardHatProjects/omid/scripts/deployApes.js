const hre = require("hardhat");

async function main() {

  const Contract = await hre.ethers.getContractFactory("BMB_NFT_COLLECTION");
  const contract = await Contract.deploy("ApesCastle", "ACP", 0x58f5f617b89b1D691042ef3AfE1bAcBC1DA92584);

  await contract.deployed();

  console.log(
    "contract deploy to:", contract.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
