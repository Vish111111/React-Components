
import { ErrorBoundary } from "react-error-boundary"


const App = ()=>{

throw new Error('i am crashed')
return <h2>i am error</h2>
}

function Error(){

    return(
        <div>
            <h2 style={{color:'papayawhip'}}>ERRORBOUNDARY</h2>
            <ErrorBoundary>
                <App/>
            </ErrorBoundary>
        </div>
    )
}
export default Error