import { contract_A } from "./A.js";
import { contract_B } from "./B.js";
import { contract_pair } from "./pair.js";


async function approve_Contracts_A(amount){
   

   const tx= await contract_A.approve('0x6dd47266D98F110651484369e7221748199eDfB3',amount)
   await tx.wait()

}
async function approve_Contracts_B(amount){
  const tx2= await contract_B.approve('0x6dd47266D98F110651484369e7221748199eDfB3',amount)
  await tx2.wait()
}
async function approve_Pair(amount){
   

    const tx3= await contract_pair.approve('0x6dd47266D98F110651484369e7221748199eDfB3',amount)
    await tx3.wait()
}

  export { approve_Contracts_A,approve_Contracts_B,approve_Pair};  