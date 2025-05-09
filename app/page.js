"use client"
import React, { useState } from 'react'

const page = () => {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")

  const [mainTask, setmainTask] = useState([]);

const submitHandler = (e)=>{
  e.preventDefault()
// console.log(title)
// console.log(desc)
setmainTask([...mainTask, {title, desc}]);
  settitle("")
  setdesc("")
  console.log(mainTask)

}
const deleteHandler = (i) =>{
  let copytask = [...mainTask]
  copytask.splice(i,1)
  setmainTask(copytask)

}

let renderTask = <h2>No Task Available</h2>
if(mainTask.length > 0)
renderTask = mainTask.map( (t,i)=>{
  return (
    <li key={i} className='flex items-center justify-between mb-5'>
      <div className=' flex items-center justify-between mb-5 w-2/3'>
      <h5 className=' text-xl font-semibold ml-5 '>{t.i} {t.title}</h5>
      <h6 className='text-lg font-medium mr-5 '>{t.desc} </h6>
      </div>
      <button 
      onClick={()=>{
        deleteHandler(i)
      }}
      className='bg-red-500 text-white px-5 py-2 mr-5
       rounded font-bold'>Delete</button>
    </li>
  );
})

  return (
  <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold'> My ToDo List</h1>
    <form onSubmit={submitHandler}>
    <input  type = "text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2  ' placeholder=' Your Title' 
    value={title} 
    onChange={(e)=>{
      settitle(e.target.value)
    }}
    
    />

    <input  type = "text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2  ' placeholder=' Task Description'
    value={desc} 
    onChange={(e)=>{
      setdesc(e.target.value)
    }}
    
    
    />
    <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5 '>Add Task</button>
    
    </form>
    
    <hr/>
    <div className='p-8 bg-slate-200'>
      <ul>
        {renderTask}
      </ul>
    </div>

   </>

  )
}

export default page
