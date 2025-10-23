import { useContext, useState ,createContext} from "react"

const UserContext = createContext()

function Parent (){

const[data,setData]=useState('Vishal')


return(
    <UserContext.Provider value={data}>
        <h2>Hello, i am {data}</h2>
        <Child/>
    </UserContext.Provider>
)

}

function Child(){

const Users = useContext(UserContext)

return(
<GrandChild/>
)
}

function GrandChild(){

const Userss = useContext(UserContext)

return(
<h2>Hello, I am React Dev</h2>
)
}

function Context(){

return(
    <div>
        <h2 style={{color:'brown'}}>CONTEXT-API</h2>
        <Parent/>
    </div>
)
}
export default Context