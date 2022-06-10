pragma solidity ^0.7.0;

contract HelloWorldContract {
    
    address owner; // state variable 
    
    function helloWorld() external pure returns(string memory){
        
        string memory  greeting ="hello world"; // local variable
        
        return greeting;
    }
    
}