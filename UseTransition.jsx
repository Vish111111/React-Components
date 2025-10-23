import { useState, useTransition } from "react"

const Transition = ()=>{

    const[data,setData]=useState(0)
    const[bigList,setBigList]=useState([])
    const [isPending,startTransition]= useTransition()


    const Handle = ()=>{


        setData(p=>p+1)
    

startTransition(()=>{

const Items = Array.from({length:20}, ((_,i)=> `items ${i}`))
setBigList(Items)

})
    }

return(
    <div>
        <h2 style={{color:'darkblue'}}>USETRANSITION</h2>
<h2>Count:{data}</h2>
        <button onClick={Handle}>Button</button>
        {isPending && <h2>pending.....</h2>}

{bigList.map((t,i)=>(
    <h2 key={i}>{t}</h2>
))}
    </div>
)

}
export default Transition