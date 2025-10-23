import { lazy,Suspense } from "react"


const Sus = ()=>{

const Data = lazy(()=> import('./Props'))

return(
    <div>
        <h2 style={{color:'tomato'}}>Suspense</h2>
        <Suspense fallback = {<h2>I am Suspense</h2>}>
        <Data/>
        </Suspense>
    </div>
)

}
export default Sus