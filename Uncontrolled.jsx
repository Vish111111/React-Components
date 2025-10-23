import { useRef } from "react"

const Uncontrolled = () => {

    const user = useRef()
    const users = useRef()

const Handle = (e)=>{

e.preventDefault()
const Data = user.current.value
const Datas = users.current.value
console.log('users:',Data,Datas)


}



    return (
        <form onSubmit={Handle}>
            <h2 style={{color:'crimson'}}>UNCONTROLLED COMPONENT</h2>
            <input type="text" ref={user} onSubmit={Handle} placeholder="name" />
            <input style={{marginLeft:'5px'}} type="text" ref={users} onSubmit={Handle} placeholder="Surname" />
            <button style={{backgroundColor:'lightgray',marginLeft:'10px'}}>Submit</button>
        </form>
    )
}
export default Uncontrolled