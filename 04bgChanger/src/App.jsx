import { useState } from 'react'
import './App.css'

function App() {
  const [colour,setColourr]=useState("olive");
  // function colourChange(){

  // }
  // const  hello=()=>{
  //   console.log("hello");
  // }
  const colourChange=(cc)=>{
    setColourr(cc)
    // return hello;
  }
  // setColour('red');
  return (
   <div className='w-full h-screen duration-200' style={{backgroundColor:colour}} >
    <div className='fixed bottom-12 inset-x-0 px-2 flex flex-col items-center gap-4 ' >
      {/* and here i am passing all onclick in one function */}
      <div className='flex flex-wrap justify-center bg-white gap-3 shadow-lg rounded-3xl px-3  py-2' >
        {/* </HI> */}
        {/* hi */}
        <button className='outline-none px-4 bg-red-400 rounded-2xl py-1 text-white shadow-2xs' onClick={() => colourChange('red')} >RED</button>
         <button className='outline-none px-4 bg-blue-400 rounded-2xl py-1 text-white shadow-2xs' onClick={()=>colourChange('blue')} >Blue</button>
          <button className='outline-none px-4 bg-green-400 rounded-2xl py-1 text-white shadow-2xs' onClick={()=>colourChange('green')} >Green</button>
           <button className='outline-none px-4 bg-yellow-400 rounded-2xl py-1 text-white shadow-2xs'onClick={()=>colourChange('yellow')}  >Yellow</button>
            <button className='outline-none px-4 bg-orange-400 rounded-2xl py-1 text-white shadow-2xs'onClick={()=>colourChange('orange')}  >Orange</button>
      </div>

      {/* here i am calling with just just setting separate on click on each button */}
       <div className='flex flex-wrap justify-center bg-white gap-3 shadow-lg rounded-3xl px-3  py-2' >
        {/* </HI> */}
        {/* hi */}
        <button className='outline-none px-4 bg-red-400 rounded-2xl py-1 text-white shadow-2xs' onClick={()=>{setColourr('Red')}} >RED</button>
         <button className='outline-none px-4 bg-blue-400 rounded-2xl py-1 text-white shadow-2xs' onClick={()=>{setColourr('Blue')}} >Blue</button>
          <button className='outline-none px-4 bg-green-400 rounded-2xl py-1 text-white shadow-2xs' onClick={()=>{setColourr('Green')}} >Green</button>
           <button className='outline-none px-4 bg-yellow-400 rounded-2xl py-1 text-white shadow-2xs'onClick={()=>{setColourr('Yellow')}}  >Yellow</button>
            <button className='outline-none px-4 bg-orange-400 rounded-2xl py-1 text-white shadow-2xs'onClick={()=>{setColourr('Orange')}}  >Orange</button>
      </div>
    </div>
   </div>
  )
}

export default App
