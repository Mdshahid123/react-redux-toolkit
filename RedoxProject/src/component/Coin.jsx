import {useSelector} from "react-redux"
function Coin() 
{    let count =useSelector((state)=>state.counter.count)
     let colour =useSelector((state)=>state.theme.colour)
    return (
        <>
             <span className='value' style={{color:colour}}>coin:{count}</span>
        </>
    )
}

export default Coin