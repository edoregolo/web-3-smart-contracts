// https://eth-ropsten.alchemyapi.io/v2/dvfuP0YKc51_qTdw-pGpiL2CtUmGEmi2

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/dvfuP0YKc51_qTdw-pGpiL2CtUmGEmi2',
      accounts: [ '86966dcdb3023ff981b1eca38ea1e9364b3331878464f8500dd174691df388a6' ]
    }
  }
}