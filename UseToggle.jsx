import { useCallback, useState } from "react";

export  function useToggle(intialValue = true){

const[data,setData]=useState(intialValue)

const toggle = useCallback(()=>{

setData((p)=>!p)

},[])

return [data,toggle]

} 

const Toggle = ()=>{

const[ShowHeading1,ToggleHeading1]=useToggle(true)
const[ShowHeading2,ToggleHeading2]=useToggle(true)
const[ShowHeading3,ToggleHeading3]=useToggle(true)


return(
    <div>
        <h2 style={{color:'darkorange'}}>Custom Hook(Use-Toggle)</h2>
        <button onClick={ToggleHeading1}>Heading1</button>
        {ShowHeading1 && <h2>Heading1</h2>}
            <button onClick={ToggleHeading2}>Heading2</button>
        {ShowHeading2 && <h2>Heading2</h2>}
            <button onClick={ToggleHeading3}>Heading3</button>
        {ShowHeading3 && <h2>Heading3</h2>}
    </div>
)


}
export default Toggle