import React, { useEffect } from "react";
import { useState } from "react";
import { addLiquidity,getAmountforLiquidity } from "../router";


const SimpleInput = (props) => {
  
  const [amount , setAmount]  = useState()
  const [amountMHZ , setAmountMHZ]  = useState()

  const [returnAmount , setReturnAmount]  = useState()

  const [isWalletConnected , setIsWalletConnected] = useState(false)
  // setIsWalletConnected(true)
  let formIsValid = false;

  const getresult=async (amount)=>{
    const result= await getAmountforLiquidity(amount)
    setAmountMHZ(result)
  }

  const amountChangeHandler = (e)=>{
    setAmount(e.target.value)
    getresult(e.target.value)
  }
  const amountMHZChangeHandler = (e)=>{
    setAmountMHZ(e.target.value)
  }
  useEffect(()=>{
    // const return = 
  },[amount])

  const formSubmitHandler = (event) => {
   
    addLiquidity(amount, amountMHZ)
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
          //onChange={amountMHZChangeHandler}
          readOnly
          value={amountMHZ}
        />
      </div>
      {/* <div className="form-control">
        <label htmlFor="email">LP-TKN</label>
        <input
          type="number"
          id="return-amount"
          readOnly
          value={returnAmount}
        />
      </div>       */}
      <div className="form-actions">
        {isWalletConnected ? <button onClick={()=>{}}>Connect Wallet</button> :
          <button onClick={formSubmitHandler}>Submit</button>
        }
      </div>
    </form>
  );
};

export default SimpleInput;
