import { useState } from "react"

export default  function Index(){
const [count,setCount]=useState(0)
const [countres,setCountres]=useState(0)
// function  reset(){
//     if(countres >0){
//         setCountres(0)
//     }
// }

function reset(){
 setCount(0)
}
function incrment(){
    setCount(count +1)
}
function  decrement(){
 if(count >0){
    setCount(count -1)
 }
 else{
    setCount(0)
 }
}
    return(
        <div>
<div className="flex justify-center mt-10">
    <div className="bg-red-300 w-[300px] p-10 shadow-lg rounded-xl ">
    <h1  className="text-center text-3xl"  style={{color:count ==10 ? "red":" "}}> {count}</h1>
    
        <div>
           
            <div className="gap-4 mt-4 text-center">
                <button   onClick={incrment}  className="bg-red-900 px-2 py-1 rounded-lg text-xl text-white">+</button>
                <buttonc onClick={decrement}  className="bg-red-900 px-3 py-1 rounded-lg text-xl ml-4 text-white">-</buttonc>
          
             <buttonc onClick={reset}  className="bg-blue-900 px-3 py-2 rounded-lg text-xl ml-4 text-white">reset</buttonc>
             </div>
        </div>

    </div>
</div>

        </div>
    )
}