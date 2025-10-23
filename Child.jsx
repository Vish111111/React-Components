import { useState } from "react"


const Child = (props)=>{

const[data,setData]=useState()

function Handle(e){
    e.preventDefault()
props.get(data)
}


return(
    <div>
         <h2 style={{color:'orchid'}}>State-Lifting(Passing Data from Child to Parent)</h2>
    <form onSubmit={Handle}>    
        <input type="text" placeholder="Enter Name" onChange={(e)=>setData(e.target.value)}/>
        <button style={{backgroundColor:'dodgerblue',marginLeft:'10px'}}>Submit</button>
    </form>
        </div>
   
)


}
export default Child