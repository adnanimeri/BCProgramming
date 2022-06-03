//This code shows an example of generation of public-private key
//http://nodejs.org/api/crypto.html


var crypto = require('crypto');

var prime_length = 450; //the lenge of key .... change it 60, 100, 250, 450,...
var diffHell = crypto.createDiffieHellman(prime_length);

diffHell.generateKeys('base64');

//print results into two different formats
console.log("Public Key : " ,diffHell.getPublicKey('base64'));
console.log("Private Key : " ,diffHell.getPrivateKey('base64'));

console.log("Public Key : " ,diffHell.getPublicKey('hex'));
console.log("Private Key : " ,diffHell.getPrivateKey('hex'));

