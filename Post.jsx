import axios from "axios"
import { useState } from "react"

const Post = ()=>{

const[data,setData]=useState({

    fname:'',
    lname:''

})

const Handle = (e)=>{

console.log(e.target.value)
setData({...data,[e.target.name]:(e.target.value)})
}
console.log(data)

const Handler = (e)=>{
    e.preventDefault()
    axios
    .post('https://jsonplaceholder.typicode.com/users',data)
    .then((res)=>{
        console.log(res)
    })
}
return(
<div>

<h2 style={{color:'mediumpurple'}}>POST API METHOD</h2>
    <form onSubmit={Handler}>
        <input type="text" name='fname' placeholder="ENTER NAME" onChange={Handle}/><br/><br/>
        <input type="text" name='lname'  placeholder="ENTER LAST NAME" onChange={Handle}/><br/><br/>
        <button style={{backgroundColor:'lightskyblue'}}>Submit</button>
    </form>
    </div>
)

}
export default Post