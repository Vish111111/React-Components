import React,{ useState} from "react"
import {useDispatch,useSelector} from 'react-redux'
import { decrement, increment,reset, incrementByAmount } from "./CounterSlice"


const Redux = ()=>{




const count = useSelector((state) => state.counter.value)
const dispatch = useDispatch()
const [data, setData] = useState(0)


return (
    <div>
        <h2 style={{color:'darkgreen'}}>REACT-REDUX</h2>
        <h2>Count:{count}</h2>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <input  type="number" value={data} onChange={(e)=>setData(Number(e.target.value))}/>
        <button onClick={()=> dispatch(incrementByAmount(data))}>Add</button>
    </div>
)
}
export default Redux