import { useMemo, useState } from "react"

function Memo(){

const[data,setData]=useState(0)

function App(num){

    for (let i=0; i<=19999; i++)
        return num*2

}

const Name = useMemo(()=> App(data),[data])

return(
    <div>
        <h2 style={{color:'fuchsia',}}>USEMEMO</h2>
        <button onClick={()=>setData(p=>p+1)}>Button</button>
        <h2>Count:{data}</h2>
        <h2>Num:{Name}</h2>
    </div>
)
}
export default Memo