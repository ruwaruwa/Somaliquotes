import { useState } from "react"
////kani waa asiment counterka oo mclinka dib u qorayey
export default function AS2(){
    const[conter,setcounter]=useState(0)
const incre=()=>
{
    setcounter(conter +1)
}
const decre=()=>
{
    if(conter >0){
        setcounter(conter -1)
    }
}
const reset=()=>
{
    setcounter(0)
}
    return(
<div>
    <div className="text-center mt-10">
        <h1 style={{color:conter ==10 ? 'red':" "}} className="text-4xl mt-5">{conter}</h1>
<div className="gap-10 p-8">
<button onClick={incre} className="bg-rose-700 p-2 gap-6 px-3 text-2xl">+</button>
<button onClick={decre} className="bg-green-800 px-3 ml-3 text-3xl ">-</button>
<button onClick={reset} className="bg-blue-800 p-2 px-3 ml-4 text-xl">reset</button>
</div>
    </div>
</div>
    )
}