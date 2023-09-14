import { ethers } from "ethers";
// const {web3} = require("web3");
// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum)  //read-only access to the Blockchain

// MetaMask requires requesting permission to connect users accounts
await provider.send("eth_requestAccounts", []);

const SEPOLIA_NETWORK_ID = 11155111;

await window.ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: `0x${SEPOLIA_NETWORK_ID.toString(16)}` }],
  });

const signer = provider.getSigner()  //to sign messages and do transcations 

export { provider, signer};