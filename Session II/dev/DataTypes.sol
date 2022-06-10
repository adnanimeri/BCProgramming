// Solidity program to demonstrate
// value types
pragma solidity ^ 0.5.0;

//primitives// DataTypes
// Creating a contract
contract DataTypes {

	// Initializing String variable
	string public str = "hello from DLH";
	// Initializing Bool variable
	bool public boolean = false;
	
	// Initializing Integer variable
	int32 public int_var = -60313;

	// Initializing Byte variable
	bytes1 public b = "c";
	
	// Defining an enumerator. Something defined from user
	enum my_enum { test, _for, course }

	// Defining a function to return
	// values stored in an enumerator
	function Enum() public pure returns(
	my_enum) {
		return my_enum._for;// return posion of element in my_enum
	}
}
