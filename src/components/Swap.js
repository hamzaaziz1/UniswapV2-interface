import React, { useEffect } from "react";
import { useState } from "react";
import { contract,getAmount,swapToken } from "../router.js";
import { provider, signer} from '../ethers.js';
import { contract_pair,callreserv1,callreserv2 } from "../pair.js";






const SimpleInput = (props) => {
  
  const [amount , setAmount]  = useState()
  const [returnAmount , setReturnAmount]  = useState()

  const [isWalletConnected , setIsWalletConnected] = useState(false)
  // setIsWalletConnected(true)
  let formIsValid = false;

  const fetch=async (amount)=>{
  
    let a= await callreserv1()
    let b=  await callreserv2()
    
    const returnAmount = await getAmount(amount,b,a)
    setReturnAmount(returnAmount)
  }
  
  const amountChangeHandler = (e)=>{
    fetch(e.target.value)
    
    setAmount(e.target.value)
  }

  useEffect(()=>{
    // const return = 
  },[amount])

  const formSubmitHandler = (event) => {

    swapToken(amount)
    event.preventDefault();


  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">TKN</label>
        <input
          type="number"
          id="amount"
          onChange={amountChangeHandler}
          value={amount}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">MHZ</label>
        <input
          type="number"
          id="return-amount"
          readOnly
          value={returnAmount}
        />
      </div>
      <div className="form-actions">
        {isWalletConnected ? <button onClick={()=>{}}>Connect Wallet</button> :
          <button onClick={formSubmitHandler}>Submit</button>
        }
      </div>
    </form>
  );
};

export default SimpleInput;