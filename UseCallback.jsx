import React,{ useCallback, useState } from "react"

const Button = React.memo(({onClick,text})=>{

console.log(`items ${text} renders`)
return <button onClick={onClick}>{text}</button>
})

const CallBack = ()=>{

const[count1,setCount1]=useState(0)
const[count2,setCount2]=useState(0)

const Handle1 = useCallback(()=>{

 setCount1(p=>p+1)
    
},[])

const Handle2 = useCallback(()=>{

 setCount2(p=>p+1)
    
},[count2])


return(
    <div>
        <h2 style={{color:'peru'}}>USECALLBACK</h2>
        <h2>count1:{count1}</h2>
        <h2>count2:{count2}</h2>
        <Button onClick={Handle1} text = 'renderd1'/>
        <Button onClick = {Handle2} text ='renderd2'/>
    </div>
)

}
export default CallBack