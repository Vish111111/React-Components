import { useState } from "react"

const Pagination = ()=>{

const item = ['a','b','c','d','e','f','g','h']
const [data,setData]=useState(1)
const itemPerPage = 2


const Start = (data-1)* itemPerPage
const end = Start + itemPerPage
const PaginatedItem = item.slice(Start,end)

return(
    <div>
        <h2 style={{color:'firebrick'}}>PAGINATION</h2>
        {PaginatedItem.map((t,i)=>(
            <li key={i}>{t}</li>
        ))}


        <button disabled = {data===1} onClick={()=>setData(data=>data-1)}>prev</button>
         <button disabled={end>= item.length} onClick={()=>setData(data=>data+1)}>Next</button>
    </div>

    
)



}
export default Pagination