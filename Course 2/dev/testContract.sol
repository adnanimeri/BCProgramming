
// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.4.16 <0.9.0;

contract testContract {

    //variable (field) declaration  
    uint256 value;

    //contructor i.e., field initialization
    constructor (uint256 _p) {
        value = _p;
    }
    //function 
    function firstFunction(uint256 _n) payable public {
        value = _n;
    }
    //function
    function secondFunction(uint256 _n) public {
        value = _n;
    }
    //function 
    function get () view public returns (uint256) {
        return value;
    }
}


