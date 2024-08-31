
import {useDispatch} from "react-redux"
import { ChangeTextColour } from "../redux/theme/themeSlice"
import {useState} from "react"
function Theme()
{   let [colour,setColour]=useState('') 
    function changeColour(e) 
    {
        setColour(e.target.value)
    }
    let Dispatch=useDispatch()
    return (
        <>
           <div>
            <input type="text" className="textBox" value={colour}  onChange={changeColour}/>
             <button className="button" onClick={()=>{Dispatch(ChangeTextColour(colour))}}>
                change text colour
             </button>
            </div> 
        </>
    )
}

export default Theme