import React, { useState } from 'react'

export default  function SomaliQuotes() {
    const[index,setindex]=useState(0)
    const[dhamad,setdhamad]=useState(false)
const nextbtn=()=>{
    if(index < maahmah.length -1){
        setindex(index +1)
      setdhamad(false)
    }
     else{
      
     setdhamad(true)
     }
 
}
const previesbtn=()=>{
 if(index>0){
    setindex(index -1)
    setdhamad(false)
 }

}

    const maahmah =[
        "1. Haad habeen kacay waxbaa kiciyey",
       "2.Hadal iyo hablaba duco labaan bay tarmaan",
       "3. Habaar waalid ma hadho.",
      "4. Habar baas inan baas bay ahayd.",
      "4.Geesi allaahay ma xilo.",
   "5. Habar dhali wayday aleelo ku waalatay.",
      "6. Habar fadhida legdini wax uga fudud.",
    "7.Geesi, Alle ma xidho",
    "8. Gorgortan saaxiib iyo walaal toona ma yaqaan.",
    
    ]
   
  return (
    <div>
        <div className='text-center mt-2'>
    {/* {dhamad &&<p className='text-4xl text-red-500'>dhamad</p>} */}
    {/* <h2 className='text-red-900 font-bold text-2xl' style={{display:index === maahmah.length-1 ? 'block' : 'none'}}>dhamaad</h2> */}

    <h1 className={`font-bold text-2xl text-red-500 ${index == maahmah.length-1 ? 'block':'hidden'}`} >Dhamaad !!</h1>
    <h1 className={`my-20 text-3xl ${index ==2 ? 'text-red-500':''}`} >{maahmah[index]}</h1>
    
    { /* style={{color:index ==2 ? 'red' : ''}} */}
            {/* <h1 className='my-20 text-3xl'>Somlai Qoutes</h1> */}
            <div className=''>
             
                <button onClick={previesbtn} className='bg-blue-400 px-8 py-3 rounded text-white'>Preview</button>
                <button onClick={nextbtn}  className='bg-blue-400 px-8 py-3 rounded text-white ml-10'>Next</button>

            </div>
        </div>
    </div>
  )
}


