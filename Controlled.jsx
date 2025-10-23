import { useState } from "react"


const Controlled = ()=>{

const[data,setData]=useState({

name:'',
surname:''
})


const Handle = (e)=>{
    setData({...data,[e.target.name]:e.target.value})
}

const Handler = (e)=>{

    e.preventDefault()
    console.log('User-Details :',data)

}


return(
    <div>
        <h2 style={{color:'olive'}}>CONTROLLED COMPONENT</h2>
        <form onSubmit={Handler}>
            <label>
               
            <input
              placeholder="Enter Name"
            type="text"
            onChange={Handle}
            name='name'
            required
            />
            </label>
              <label>
           
            <input
            placeholder="Enter Surname"
            type="text"
            style={{marginLeft:'5px'}}
            onChange={Handle}
            name='surname'
            required
            />
            </label>
            <button style={{backgroundColor:'lavenderblush', marginLeft:'10px'}}>Submit</button>
        </form>
    </div>
)



}
export default Controlled