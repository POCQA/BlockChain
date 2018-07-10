pragma solidity ^0.4.24;

contract Calculator{
  uint result=0;

  function getResult() public constant returns (uint){
    return result;
  }

  
  function addNumber(uint num1, uint num2) public returns (uint) {
    
    result = num1+num2;
    return result;
  }

  
  function substractNumber(uint num1, uint num2) public returns (uint) {
    result = num1-num2;
    return result;
  }

  
  function multiplyNumber(uint num1, uint num2) public returns (uint) {
    result = num1*num2;
    return result;
  }

  
  function divideNumber(uint num1, uint num2) public returns (uint) {
    result = num1/num2;
    return result;
  }

}