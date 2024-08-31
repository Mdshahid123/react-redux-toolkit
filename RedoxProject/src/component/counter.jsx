import { useSelector, useDispatch } from "react-redux";
import { decrement, increment,incrementByAmount } from "../redux/counter/counterSlice";

function Counter() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <button  className="button"  aria-label="increment value" onClick = {()=>dispatch(increment())}>
                    +
                </button>
                <span className="value">counter:{count}</span>
                <button 
                    className="button" 
                    aria-label="decrement value" 
                    onClick={() => dispatch(decrement())} // Corrected this line
                >
                -
                </button>
                <button className="button"  onClick={() => dispatch(incrementByAmount(10))} >increament by 10</button>
            </div>
        </>
    );
}

export default Counter;
