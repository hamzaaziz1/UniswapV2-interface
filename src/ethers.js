import { ethers } from "ethers";
// const {web3} = require("web3");
// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum)  //read-only access to the Blockchain

// MetaMask requires requesting permission to connect users accounts
await provider.send("eth_requestAccounts", []);
//  const accounts = await provider.getSigner().getAddress();
//  console.log(accounts)
// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signer = provider.getSigner()  //to sign messages and do transcations 

export { provider, signer};