import Web3 from 'web3';
import a  from 'web3-eth-contract';

import makeContract from '@truffle/contract';

import userDataJsonContract from '../contracts/UserData.json';

export function getContract(account) {
    // Get web3 with its provider
    // const web3 = new Web3("http://localhost:8545");
    const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');
    
    console.log("Account: ", account);
    /*
    web3.eth.defaultAccount = account;
    */

    // =====================

    let contractAddress = "0x699104e1D6b04aB43273Fd631c6604148d4D15A2";
    let ABI = userDataJsonContract.abi;

    // Get the contract ABI
    // const UserDataContract = makeContract({
    //     abi: userDataJsonContract.abi,
    //     address: contractAddress,
    // });
    // UserDataContract.setProvider(web3.currentProvider);
    
    return new web3.eth.Contract(ABI, contractAddress);
}
