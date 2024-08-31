//import {useState} from "react"
function Counter({count,setCount})
{    
   // let [count,setCount]=useState(0)
    function countPlus()
    {
        setCount(count++)
    }
    function countMinus()
    {
        setCount(count--)
    }
    return (
        <>
           <div>
                   <button className="button"  aria-label='increament value' onClick={countPlus}>+</button>
                    <span className='value'>{count}</span>
                    <button className="button"  aria-label='decreament value' onClick={countMinus}>-</button> 
            </div> 
        </>
    )
}

export default Counter