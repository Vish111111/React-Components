
function Synthetic(){

function App(e){

console.log('type:',e.type)
console.log('text:',e.target.innerText)
console.log('event',e)
e.preventDefault()

}
return(
    <div>
    <h2 style={{color:'forestgreen'}}>Synthetic Event</h2>
    <button style={{backgroundColor:'moccasin'}} onClick={App}>Button</button>
    </div>
)

}
export default Synthetic