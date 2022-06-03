// https://www.geeksforgeeks.org/node-js-hash-digest-method/#:~:text=The%20hash.,instance%20of%20Hash%20using%20crypto.

// Importing the crypto library
const crypto = require("crypto")

// Defining the algorithm
let algorithm = "sha256"

// Defining the key
let key = "blockchain"

// Creating the digest in hex encoding
let digest1 = crypto.createHash(algorithm).update(key).digest("hex")

// Creating the digest in base64 encoding
let digest2 = crypto.createHash(algorithm).update(key).digest("base64")

// Printing the digests (hash)
console.log("In hex Encoding : \n " + digest1 + "\n")
console.log("In base64 encoding: \n " + digest2)