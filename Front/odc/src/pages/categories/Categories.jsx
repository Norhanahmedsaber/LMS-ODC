import React, { useState ,useEffect } from 'react'

function Categories() {
    const [cats, setCats] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/category").then((res)=>{
            return res.json()
        }).then((data)=>{
            setCats(data)
        })
    },[])
    return (
        <div className='w-screen h-screen bg-slate-300 flex justify-center items-center flex-rows'>
            <div className='flex w-screen justify-center items-center h-80 bg-slate-600 overflow-auto '>    
                {cats.map((cat) => {
                    return (
                        <div className='text-fuchsia-50 text-4xl flex w-1/4 h-full min                   
                                        justify-center items-center cursor-pointer 
                                        rounded-md border border-black m-1
                                        hover:bg-slate-300  '>
                            {cat.name}
                        </div>
                )
            })}
            </div>
        </div>
    )
}

export default Categories
