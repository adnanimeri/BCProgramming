pragma solidity ^0.8.13;

contract Functions {
    // Functions can return multiple values.
    function returnManyVariables() public pure returns (uint, bool, uint){
        return (1, true, 2);
    }
  
    function namedVariables() public pure  returns ( uint x, bool b, uint y){
            return (1, true, 2);
        }

    //set and get function
    //public enables visibility so that we can call this outside contract

    //view means it values is only read not to modify
    function getResult() public view returns(uint){
        uint a = 1; // local variable
        uint b = 2;
        uint result = a + b;
        return result;
       
    }




}

