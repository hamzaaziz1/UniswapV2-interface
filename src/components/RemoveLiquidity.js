import React, { useEffect } from "react";
import { useState } from "react";
import { RemoveLiquidity } from "../router";
import { getExpectedAmount } from "../pair";

const SimpleInput = (props) => {
  
  const [amountLP , setAmount]  = useState()
  const [amountTKN , setAmountTKN]  = useState()
  const [amountMHZ , setAmountMHZ]  = useState()

  const [isWalletConnected , setIsWalletConnected] = useState(false)
  // setIsWalletConnected(true)
  let formIsValid = false;

  const set=async (amountLP)=>{
  
    const [ReturnamountA,ReturnamountB]  = await getExpectedAmount(amountLP)
    setAmountTKN(ReturnamountA)
    setAmountMHZ(ReturnamountB)
    
  }

  const amountChangeLPHandler = (e)=>{
    setAmount(e.target.value)
    set(e.target.value)
  }

  useEffect(()=>{
    // const return = 
  },[amountLP])
  
  const formSubmitHandler = (event) => {

    event.preventDefault();

    RemoveLiquidity(amountLP,amountTKN,amountMHZ)

  };

  return (
    <form onSubmit={formSubmitHandler}>

      <div className="form-control">
        <label htmlFor="email">LP-TKN</label>
        <input
          type="number"
          id="return-amount"
          onChange={amountChangeLPHandler}
          value={amountLP}
          
        />
      </div> 
              
      <div className="form-control">
        <label htmlFor="name">Expected TKN</label>
        <input
          type="number"
          id="amount"
          readOnly
          value={amountTKN}
        />
      </div>

      <div className="form-control">
        <label htmlFor="email">Expected MHZ</label>
        <input
          type="number"
          id="return-amount"
          readOnly
          value={amountMHZ}
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
