require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: ["293c7c52a994ee8ecbfc29d49808998a32befa948d54018d13f8ad9abc1368a0"]
    }
  }
};
