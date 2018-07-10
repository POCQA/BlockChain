if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];

var calculatorContract = web3.eth.contract();
var contractAbi = web3.eth.contract([{ "constant": false, "inputs": [{ "name": "num1", "type": "uint256" }, { "name": "num2", "type": "uint256" }], "name": "addNumber", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "num1", "type": "uint256" }, { "name": "num2", "type": "uint256" }], "name": "divideNumber", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "num1", "type": "uint256" }, { "name": "num2", "type": "uint256" }], "name": "substractNumber", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "num1", "type": "uint256" }, { "name": "num2", "type": "uint256" }], "name": "multiplyNumber", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getResult", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }]);
var myContract = contractAbi.at("0x8C6f822ca045E9bC89b59A91Cf653a9a148d3933");

//finally paas this data parameter to send Transaction
var firstValue;
var secondValue;
function checkInput(elem) {
  firstValue = document.getElementById("input1").value;
  secondValue = document.getElementById("input2").value;
  if (elem.id == 'addButton') {
    updateTransaction(myContract.addNumber);
  }
  else if (elem.id == 'subButton') {
    if(firstValue>=secondValue){
      updateTransaction(myContract.substractNumber);
    }
    else{
      alert("First value should be greater than 2nd Value");
      document.getElementById("input1").value="";
      document.getElementById("input2").value="";
      document.getElementById("output").value="";
    }
    
  }
  else if (elem.id == 'mulButton') {
    updateTransaction(myContract.multiplyNumber);
  }
  else {
    updateTransaction(myContract.divideNumber);
  }
}

function updateTransaction(queue) {
  var getData = queue.getData(parseInt(firstValue), parseInt(secondValue));
  //finally paas this data parameter to send Transaction
  queue.call(parseInt(firstValue), parseInt(secondValue), { from: web3.eth.accounts[0], gas: 3000000 }, function (err, res) {
    console.log(res.c[0]);
    document.getElementById('output').value= parseFloat(res.c[0]);
  });
  web3.eth.sendTransaction({ to: "0x8C6f822ca045E9bC89b59A91Cf653a9a148d3933", from: web3.eth.accounts[0], data: getData });
}

function clearInput() {
  document.getElementById("input1").value="";
  document.getElementById("input2").value="";
  document.getElementById("output").value="";
  
}