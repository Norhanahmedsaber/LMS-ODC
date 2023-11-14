import { useState } from 'react'
import './input.css'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className='w-screen h-screen bg-teal-400 flex justify-center items-center flex-col'>
      <div className='text-2xl'>anazz</div>
      <div className='text-4xl'>{count}</div>
      <div className='bg-red-400 cursor-pointer w-24 h-16 
                        flex justify-center items-center rounded-md 
                        border border-black hover:bg-green-300' onClick={() => {
        setCount(count + 1)
      }}>Plus</div>
    </div>
  )
}

export default App
