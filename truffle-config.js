
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    }
  },
   compilers: {
    solc: {
      version: "0.8.11"  // ex:  "0.4.20". (Default: Truffle's installed solc)
    }
  }
};
