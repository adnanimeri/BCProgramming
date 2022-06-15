// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Variables {
    // State variables are stored on the blockchain.
    string public text = "Hello";
    uint public num = 123;

    function doSomething() public {
        // Local variables are not saved to the blockchain.
        uint i = 456;
        uint256 j = 256666888884444;
        

        // Global variables are used mainly to 
        address sender = msg.sender; // address of the caller
        uint timestamp = block.timestamp; // Current block timestamp
        
    }
}