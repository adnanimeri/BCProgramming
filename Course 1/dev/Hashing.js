// https://www.geeksforgeeks.org/node-js-hash-digest-method/#:~:text=The%20hash.,instance%20of%20Hash%20using%20crypto.

// Importing the crypto library
const crypto = require("crypto")

// Defining the algorithm
let algorithm = "sha256"

// Defining the key
let keyword = "Test123"

// Creating the digest in hex encoding
let digest1 = crypto.createHash(algorithm).update(keyword).digest("hex")

// Creating the digest in base64 encoding
let digest2 = crypto.createHash(algorithm).update(keyword).digest("base64")

// Printing the digests (hash)
console.log("In hex Encoding : \n " + digest1 + "\n")
console.log("In base64 encoding: \n " + digest2)

// ef7797e13d3a75526946a3bcf00daec9fc9c9c4d51ddc7cc5df888f74dd434d1
// d46b1749de592b46670d057ede195e7b534eccc99fcf57a3a800f52612947b86
// 553a6940bb74a181963b6e1db3824d9fda7a4d235d7af627e50a15a942420416

// d9b5f58f0b38198293971865a14074f59eba3e82595becbe86ae51f1d9f1f65e = 553a6940bb74a181963b6e1db3824d9fda7a4d235d7af627e50a15a942420416