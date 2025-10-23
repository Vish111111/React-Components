import { useState } from "react"

const Todo = ()=>{

const[task,setTask]=useState('')
const[tasks,setTasks]=useState([])


const Add = ()=>{

if (task.trim()==='')return;
setTasks([...tasks,task])
setTask('')
}

const Delete = (index)=>{

const NewTask = tasks.filter((_,i)=> i!== index)
setTasks(NewTask)
}

return(
    <div>
        <h2 style={{color:'gold'}}>TO-DO APP</h2>
        <input type="text" placeholder='ENTER A TASK NAME' onChange={(e)=> setTask(e.target.value)}/>
        <button style={{backgroundColor:'lightpink',marginLeft:'10px'}} onClick={Add}>Add</button>
        <ul>
            {tasks.map((t,index)=>(
                <li key={index}>{t}{''}
                <button onClick={()=> Delete(index)}>Delete</button>
                </li>

            ))}
        </ul>
    </div>
)

}
export default Todo