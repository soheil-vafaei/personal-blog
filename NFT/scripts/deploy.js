
const { ethers } = require("hardhat");

async function main() {

  const Certificate = await ethers.getContractFactory("Lock");
  const certificate = await Certificate.deploy();

  await certificate.deployed();
  console.log("Success! Contract was deployed to: ", certificate.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });