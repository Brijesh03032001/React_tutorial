import React, { useEffect, useState } from 'react'
import "./CounterTut.css"

const CounterTut = () => {
    const [value, setValue] = useState(0);

    useEffect(()=>{console.log("Hello")},[value]);
    function Increment()
    {
        setValue((pre) => pre+1);

    }
    function Decrement()
    {
        setValue((pre) => {
            if(pre<=0)
            {
                return 0;
            }
            return pre-1;
        });

    }
    function Reset()
    {
        setValue((pre) => 0);

    }
    return (
        <>
        <div style={{background:"beige", border: "10px solid red" ,padding:"20px 20px" , borderRadius: "10px"}}>
        <h1 style={{color: "Black"}}>Counter</h1>
        <input className='Input_tut' type="number" value={value} onChange={(e) => setValue(Number(e.target.value))}></input><br/>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement} disabled= {value === 0}>Decrement</button>
        <button onClick={Reset}>Reset</button>
        </div>
        </>
    )
}

export default CounterTut