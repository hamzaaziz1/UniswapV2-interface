import { useState } from "react";
import Swap from "./components/Swap";
import AddLiquidity from "./components/AddLiquidity";
import RemoveLiquidty from "./components/RemoveLiquidity"

function App() {
  const [activeIndex , setActiveIndex] = useState(0)
  return (
    <div className="app">

      <div className="button-box">
        <button 
          className={activeIndex === 0 ? "active" : ""}
          onClick={()=>setActiveIndex(0)}>Add liquidity</button>
        <button 
          className={activeIndex === 1 ? "active" : ""}
          onClick={()=>setActiveIndex(1)}>Remove liquidity</button>
        <button 
          className={activeIndex === 2 ? "active" : ""}
          onClick={()=>setActiveIndex(2)}>Swap</button>
      </div>

      {activeIndex === 0 && <AddLiquidity />}
      {activeIndex === 1 && <RemoveLiquidty/>}
      {activeIndex === 2 && <Swap />}

    </div>
  );
}

export default App;
