import { useEffect } from "react"
import { useState } from "react"

const Data = [
'https://digitad.ca/wp-content/uploads/2023/01/photo-unsplash-800x573.jpg',
'https://img.freepik.com/premium-photo/photo-mount-everest_583952-9466.jpg',
'https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg',
'https://cdn.wallpapersafari.com/56/0/ZJyOpX.jpg',
'https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg',
'https://wallup.net/wp-content/uploads/2016/03/10/319576-photography-landscape-nature-water-grass-trees-plants-sunrise-lake.jpg',
'https://cdn.pixabay.com/photo/2021/11/05/13/15/lavaux-6771369__480.jpg',
'https://www.pixelstalk.net/wp-content/uploads/2016/07/Background-Beautiful-Nature-Images-HD.jpg',
'https://wallpaperaccess.com/full/4723250.jpg',
'https://images.indianexpress.com/2024/05/NASA-posts-mesmerising-new-pictures.jpg'

]





const Slider = ()=>{

const[page,setPage]=useState(0)

const Prev = ()=>{

setPage(!page?Data.length-1:page-1)

}



const Next = ()=>{

setPage((page+1) % Data.length)

}

useEffect(()=>{

setTimeout(()=>{


Next()

},1000)

},[page])


return(
    <div>
        <h2 style={{color:'darkorange',textAlign:'center'}}>IMAGE-SLIDER</h2>
        <button style={{margin:'22px 22px 10px 2px',width:'100px'}}onClick={Prev}>Prev</button>
        <img style={{width:'1000px', objectFit:'contain'}} src={Data[page]}/>
           <button style={{margin:'22px', width:'100px'}} onClick={Next}>Next</button>
    </div>
)






}
export default Slider