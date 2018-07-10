var Calculator = artifacts.require("./Calculator.sol");

module.exports = function(deployer) {
  // #2 Deploy the instance of the contract
  deployer.deploy(Calculator);//, 10);
};