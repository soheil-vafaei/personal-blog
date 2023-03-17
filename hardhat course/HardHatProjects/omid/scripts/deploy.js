const hre = require("hardhat");

async function main() {

  const Contract = await hre.ethers.getContractFactory("Token");
  const contract = await Contract.deploy("soheilToken", "SOL", 5);

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
