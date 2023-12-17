import { useState } from "react"

export default function Menu(){
    const[isopen,setisopen]=useState(false)
    const[isclose,setclose]=useState(false)
   const handleopen=()=>{
setisopen(true)
   }
   const handlecolose=()=>{
    setisopen(false)
       }
    return(
        <div>
            <div className="bg-orange-500  py-6 px-5">
<div className="flex justify-between text-white">
    <h1 className="text-4xl font-bold">Nooty</h1>
    <i style={{display: isopen == true ? 'none' : ' '}} onClick={handleopen} class="fa-solid fa-bars sm:hidden absolute right-2 text-4xl"></i>
    <i onClick={handlecolose} style={{display:isopen == true ? 'block' : "none"}}
     class="fa-solid fa-x hidden sm:hidden absolute right-2 text-4xl"></i>
    <ul style={{display:isopen == true ? 'block'  :" "}}
     className="hidden text-2xl sm:flex sm:space-x-12 sm:mt-0 
     space-y-6 sm:space-x- mt-16 sm:space-y-0 
     flex-col sm:flex-row  sm:text-2xl ">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Pricing</li>
    </ul>
</div>
            </div>
        </div>
    )
}