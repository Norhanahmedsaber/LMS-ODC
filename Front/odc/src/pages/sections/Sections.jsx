import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Section(props) {
  const [courseData, setCourseData] = useState({})
  const [sections, setSections] = useState([])
  const params= useParams()
  const fetchSections = () =>{
    if(params.id) {
        fetch(`http://localhost:3000/course/${params.id}`)
        .then((res) =>res.json())
        .then((res)=>setCourseData(res))
        fetch(`http://localhost:3000/sections/${params.id}`)
        .then((res) => res.json())
        .then((response)=>{
          setSections(response)
        })
    }
}
useEffect(()=>{
    fetchSections()
},[])
  return (
    <div className='grid grid-flow-row-dense grid-cols-5 text-3xl h-screen'>
      <div className="col-span-4 font-bold bg-slate-500 flex justify-center items-center h-full flex-col">
        <div className='w-full h-[20%] bg-slate-700 flex flex-col'>
          <div className='w-full flex font-normal text-2xl p-2'>{courseData.name}</div>
          <div className='w-full flex font-normal text-xl m-2'>{courseData.description}</div>
        </div>
        <div className='w-full h-[80%] flex justify-center items-center'>Rawan & Anazz</div>
      </div>
      <div className="h-full col-span-1 bg-slate-700 items-center overflow-y-scroll border-b border-slate-500">
        {sections.map((item, index) => (
          <div className='p-2 border-b border-slate-500 hover:bg-slate-500' key={index}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}