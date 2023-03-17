require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: ["7fc2b03372a317cff08fdd4b13b2479ed17ee73b0244729975f5b386a1464a2c"],
    }
  },
};
