import { useReducer } from "react"

const Obj = {

name:'',
surname:'',
email:'',
password:'',
city:'',
location:''
}


function Reducers(data,action){

return {...data,[action.type]: action.val}

}

const Reducer = () => {


const[state,dispatch]=useReducer(Reducers,Obj)

console.log(state)
    return (
        <div>
            <h2 style={{color:'darkgoldenrod'}}>USEREDUCER </h2>
            <input type="text" onChange={(e)=> dispatch({val:e.target.value, type:'name'})} placeholder="name" />
            <input type="text" onChange={(e)=> dispatch({val:e.target.value, type:'surname'})} placeholder="surname" />
            <input type="text" onChange={(e)=> dispatch({val:e.target.value, type:'email'})} placeholder="email" />
            <input type="text" onChange={(e)=> dispatch({val:e.target.value, type:'password'})} placeholder="password" />
            <input type="text" onChange={(e)=> dispatch({val:e.target.value, type:'city'})} placeholder="city" />
            <input type="text" onChange={(e)=> dispatch({val:e.target.value, type:'location'})} placeholder="location" />
            <button onClick={()=> console.log(state)}>submit</button>
            <ul>
               <li>Name:{state.name}</li> 
               <li>Surname:{state.surname}</li> 
                <li>Email:{state.email}</li>
                <li>Password:{state.password}</li>
                <li>City:{state.city}</li>
                <li>Location:{state.location}</li>
            </ul>
        </div>
    )


}
export default Reducer