
//converting text into binary (64bit), 8bytes.....

console.log("------------------- convert into binary64---------------------")

console.log(Buffer.from("Hello World").toString('base64'));

console.log(Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('ascii'))


console.log("------------------- convert into hexadecimal---------------------")
 


console.log("from ASCII to HEX", "Hello World", "-->", Buffer.from("Hello World").toString('hex'));


console.log("from HEX into ASCII:",  Buffer.from("Hello World").toString('hex'), "--> ", Buffer.from("48656c6c6f20576f726c64", 'hex').toString('ascii'))



