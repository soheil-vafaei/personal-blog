require("@nomiclabs/hardhat-waffle");

task ("accounts", "prints the list of accounts", async (taskArgs, hre) =>{
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts)
  {
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: ["293c7c52a994ee8ecbfc29d49808998a32befa948d54018d13f8ad9abc1368a0"]
    }
  }
};
