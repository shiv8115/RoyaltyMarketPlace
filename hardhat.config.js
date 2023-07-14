require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  accounts: {
    count: 5,
    // accountsBalance: 10000000000000000000000, // default value is 10000ETH in wei
},
};
