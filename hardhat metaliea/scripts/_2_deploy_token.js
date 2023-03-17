const hre = require("hardhat");

async function main ()
{
    const Contract = await hre.ethers.getContractFactory("Token");
    const contract = await Contract.deploy("Metaliea Token","MTL",9); 

    await contract.deployed();

    console.log ("cotract deploy to : " , contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });