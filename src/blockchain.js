class Block {
  constructor(index, hash, previousHash, timestamp, data) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
  }
}

const genesisBlock = new Block(
  0,
  '5BF8F85A1BD8B6C61248E110A1EE140BDB6F68F146A583C781F52BAEC3FA3322',
  null,
  1526735534007,
  'This is the GenesisBlock!'
);

let blockchain = [genesisBlock];

console.log(blockchain);
