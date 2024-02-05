import { useState } from "react";

function User() {

    
    const [count , setCount] = useState(null);

    function Reset(){
        // count == 0;
    }

    
    return (
        <div className="User">
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            {/* <br></br> */}
            <button onClick={()=>setCount(count==null)}>Reset</button>
        </div>
    )
}

export default User;