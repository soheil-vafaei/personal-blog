const hre = require("hardhat");

async function main() {
    
    const TestContract = await hre.ethers.getContractFactory("MyToken");
    const testContract = await TestContract.deploy("", "mehran1155", "MHR1155");

    await testContract.deployed();

    console.log("test contract deploy to :", testContract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
  