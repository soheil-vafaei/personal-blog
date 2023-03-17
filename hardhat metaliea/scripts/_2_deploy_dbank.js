const hre = require("hardhat");

async function main ()
{
    const Contract = await hre.ethers.getContractFactory("Decentralized_Bank");
    const contract = await Contract.deploy("0x5FbDB2315678afecb367f032d93F642f64180aa3"); 

    await contract.deployed();

    console.log ("cotract deploy to : " , contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });