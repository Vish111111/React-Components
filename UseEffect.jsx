import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Effect = ()=>{

const[data,setData]=useState(0)
useEffect(()=>{

setTimeout(()=>{

setData(p=>p+1)

},500)

})   

return(
    <div>
        <h2 style={{color:'chocolate'}}>useEffect</h2>
        <h2>Hello,The Current Time is {data} sec</h2>
    </div>
)

}
export default Effect