
// props example passing data from parent to child

import { useState } from "react"

const User = ({Country})=>{


return(
    <div>
        <h2 style={{color:'magenta', textDecoration:'underline'}}>Props Example(Passing Data From Parent To Child)</h2>
    <h2>Hello, Our Country Name is {Country}</h2>
</div>)

}
export default User