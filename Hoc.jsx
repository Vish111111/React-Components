
function withBorder(WrappedComponent){

return function NewComponent(props){

    return (
        <div style={{border:'4px solid red', cursor:'pointer', padding:'16px'}}>
            <WrappedComponent {...props}/>
        </div>
    )
}
}

function Data({name}){

    return <h2>Hi, I am {name}</h2>
}

const DatawithBorder = withBorder(Data)

function Hoc(){

return(
    <div>
        <h2 style={{color:'mediumpurple'}}>HIGHER ORDER FUNCTION</h2>
        <Data name='vishal'/>
        <DatawithBorder name= 'Vishal Kadam'/>
    </div>
)

}
export default Hoc