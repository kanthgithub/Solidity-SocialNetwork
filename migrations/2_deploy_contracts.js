/* eslint-disable space-before-function-paren */
var SimpleSocialNetwork = artifacts.require('SimpleSocialNetwork')

module.exports = function (deployer) {
  deployer.deploy(SimpleSocialNetwork)
}