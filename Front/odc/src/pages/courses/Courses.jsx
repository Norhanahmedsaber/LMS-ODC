import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigation } from 'react-router-dom'

export default function Courses(props) {
    const Navigate = useNavigate()
    const [courses , setCourses] = useState([])
    const fetchCourses = () =>{
        if(props.catId) {
            fetch(`http://localhost:3000/course/cat/${props.catId}`)
            .then((res) =>res.json())
            .then((res)=>setCourses(res))
        }else {
            fetch(`http://localhost:3000/course/cat/1`)
            .then((res) =>res.json())
            .then((res)=>setCourses(res))
        }
    }
    useEffect(()=>{
        fetchCourses()
    },[])

    const courseNav = (courseId)=>{
       Navigate(`/course/${courseId}`)
    }

  return (

<div className='w-screen h-screen '>
        <div className='w-screen  bg-[#274472] h-[10%] flex flex-row gap-5 justify-center items-center text-[30px] text-white cursor-pointer'>
        <div className=' hover:bg-[#c1d8fb] '>Home</div>
        <div className=' hover:bg-[#c1d8fb] '>About</div>
        <div className=' hover:bg-[#c1d8fb] '>Category</div>
        <div className=' hover:bg-[#c1d8fb] '>Courses</div>
    </div>
    <div className='w-screen h-screen flex justify-center items-center '>
    <div className='bg-[#e5eced] w-9/12 h-[80%] rounded-xl text-center text-white text-[30px] grid grid-cols-3 place-items-center items-center '>
            
    {courses.map((course)=>{
        return (
            <div className='w-[70%] h-[40%]  bg-[#274472] rounded-xl  hover:bg-[#c1d8fb] flex justify-center items-center cursor-pointer 'onClick={()=>{
                courseNav(course.id)
            }}>
                {course.name}      
            </div>
        )
    })}

    </div>
    </div>
</div>
  )  
}
