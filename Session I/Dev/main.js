//https://www.codementor.io/@savjee/implementing-proof-of-work-blockchain-in-javascript-part-2-k9ozymkqw
//npm install --save crypto.js
const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(timestamp, data, previousHash = '') {
      this.previousHash = previousHash;
      this.timestamp = timestamp;
      this.data = data;
      this.hash ='';
     
    }
    calculateHash() {
      return SHA256(this.index + this.previousHash + this.timestamp +    JSON.stringify(this.data)).toString();
    }

    mineBlock(difficulty) {
      // Keep changing the nonce until the hash of our block starts with enough zero's.
      while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
        this.nonce++;
        this.hash = this.calculateHash();
      }
        
      console.log("Block is Mined: " + this.hash);
    }

  }

class Blockchain{

  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 3;
}

  createGenesisBlock(){
    return new Block(0, "04/06/2022", "Genesis block", "0");//first block created 
  }

  //We need to get last block

  getLatestBlock(){
    return this.chain[this.chain.length -1];
  }

  //we need to add new block 

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;//geting the hash of latest block
    newBlock.mineBlock(this.difficulty);//recalulcate hash 
    this.chain.push(newBlock);//add block into chanin 
  }

}

//Testing

let testBlockchin = new Blockchain()
testBlockchin.addBlock(new Block(1, "04/06/2022", {amount: 1}))
testBlockchin.addBlock(new Block(1, "11/06/2022", {amount: 5}))
console.log("here")
console.log(JSON.stringify(testBlockchin, null, 4))
