import { contract_A } from "./A.js";
import { contract_B } from "./B.js";
import { contract_pair } from "./pair.js";


async function approve_Contracts(){
   

   const tx= await contract_A.approve('0x6dd47266D98F110651484369e7221748199eDfB3',9999999)
   await tx.wait()
   const tx2= await contract_B.approve('0x6dd47266D98F110651484369e7221748199eDfB3',9999999)
   await tx2.wait()
}
async function approve_Pair(){
   

    const tx3= await contract_pair.approve('0x6dd47266D98F110651484369e7221748199eDfB3',9999999)
    await tx3.wait()
}

  export { approve_Contracts,approve_Pair};  