const hre = require("hardhat");

async function main() {
    
    const TestContract = await hre.ethers.getContractFactory("Collection");
    const testContract = await TestContract.deploy(0 , "https://gateway.pinata.cloud/ipfs/QmfP4UQHc5F6h5YtvsKFcvWhLZ67GKZMCEtcGkHePzJMb7/0.json");

    await testContract.deployed();

    console.log("test contract deploy to :", testContract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
  