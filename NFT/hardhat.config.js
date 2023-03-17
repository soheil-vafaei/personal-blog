require("@nomiclabs/hardhat-waffle");


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.4",
  networks: {
    
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: ["f964e85c33517b7b79365a4397268109a81e363e67669c4ad6519272933382a8"]
    }
  }
};



