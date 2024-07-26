require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv',
      accounts: ['2f99db8cdb04655028eee1dc98230925202f6b3e010e43fad2883b4bea90a1a3'],
    },
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/5-mB2s2Bc2H38HIqiJeF0V-T9SVLfTx1',
      accounts: ['7203fa247747bbd3b013b3ac385127a4449f8ccbb4f803817452692686f08b6f'],
    },
  },
};