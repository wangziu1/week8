require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    "goerli": {
       url: "https://opt-goerli.g.alchemy.com/v2/FEoGlMCsoWzVq7yGOPTQmcaIZnz6X3ah",
       accounts: ["02ba6cc306a29d8ee84fbb410e3e29d05eaa45bb704bd4250b26660843fd2f9d"]
    }
  }

};
