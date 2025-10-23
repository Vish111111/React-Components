import axios from "axios"
import { useEffect, useState } from "react"

// 1. Fetch using promise

// const Api = ()=>{

// const[data,setData]=useState([])

// useEffect(()=>{

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=>res.json())
// .then((resp)=>{
//     console.log(resp)
//     setData(resp)
// })
// },[])

// return(
//     <div>
//         <h2 style={{color:'lightgreen'}}>API-FETCH-PROMISE</h2>
//         {data.map((t,i)=>{
//             return<div key={i}>
//                 <ul>
//                 <li>{t.name}</li>
//              <li>{t.address.city}</li>   
//                 <li>{t.address.geo.lat}</li>
//                 </ul>
//             </div>
//         })}
//     </div>
// )

// }
// export default Api

//......................................................//................................................................

// 2. Fetch using Async-await



 export const Api = ()=>{

const[data,setData]=useState([])

useEffect(()=>{

const Name = async()=>{

const user = await fetch('https://jsonplaceholder.typicode.com/users')
const users = await user.json()
console.log(users)
setData(users)

}
Name()
},[])

return(
    <div>
        <h2 style={{color:'lightgreen'}}>API DATA FETCHING</h2>
        {data.map((t,i)=>{
            return<div key={i}>
                <ul>
                <li>{t.name}</li>
             <li>{t.address.city}</li>   
                <li>{t.address.geo.lat}</li>
                </ul>
            </div>
        })}
    </div>
)

}

//........................................//................................................................

// 3.Axios using Async-await

// const Api = ()=>{

// const[data,setData]=useState([])

// useEffect(()=>{

// const Name = async()=>{

// const user = await axios .get('https://jsonplaceholder.typicode.com/users')
// console.log(user)
// setData(user.data)

// }
// Name()
// },[])

// return(
//     <div>
//         <h2 style={{color:'lightgreen'}}>API-AXIOS-ASYNC-AWAIT</h2>
//         {data.map((t,i)=>{
//             return<div key={i}>
//                 <ul>
//                 <li>{t.name}</li>
//              <li>{t.address.city}</li>   
//                 <li>{t.address.geo.lat}</li>
//                 </ul>
//             </div>
//         })}
//     </div>
// )

// }
// export default Api

//.................................//.....................................................

// 4.Axios using Promise

// const Api = ()=>{

// const[data,setData]=useState([])

// useEffect(()=>{

// axios
// get('https://jsonplaceholder.typicode.com/users')
// .then((resp)=>{
//     console.log(resp)
//     setData(resp.data)
// })
// },[])

// return(
//     <div>
//         <h2 style={{color:'lightgreen'}}>API-AXIOS-PROMISE</h2>
//         {data.map((t,i)=>{
//             return<div key={i}>
//                 <ul>
//                 <li>{t.name}</li>
//              <li>{t.address.city}</li>   
//                 <li>{t.address.geo.lat}</li>
//                 </ul>
//             </div>
//         })}
//     </div>
// )

// }
// export default Api

//...................................//.........................................................

// 5. fetching multipe api at a time using Promise.all

 export const Apis = ()=>{

const[data,setData]=useState({

 users : null,
 comments:null,
 posts:null   
})

const[pending,setPending]=useState(true)

useEffect(()=>{

const userApi = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())
const commentAPi = fetch('https://jsonplaceholder.typicode.com/comments').then(res=>res.json())
const postApi = fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json())

Promise.all([userApi,commentAPi,postApi])
.then(([users,comments,posts])=>{

setData({users,comments,posts})
setPending(false)
})

},[])
if(pending) return <h2>i am pending........</h2>

return(
    <div>
        <h2 style={{color:'maroon'}}>FETCHING MULTIPLE API AT A TIME</h2>
        <ul>
            <li>users:{data.users.length}</li>
             <li>comments:{data.comments.length}</li>
              <li>posts:{data.posts.length}</li>
        </ul>
    </div>
)


}