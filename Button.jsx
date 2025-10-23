import { useState } from "react"


const Color = ()=>{


const[data,setData]=useState('red')

const Name = ()=>{

    setData(data==='yellow'?'green':'yellow')
}


return(
    <div>
        <h2 style={{color:'navy'}}>Button Toggle Color Change</h2>
        <button style={{backgroundColor:data, padding:'32px', pointer:'cursor'}} onClick={Name}></button>
    </div>
)

}
export default Color