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


let renderTask = <h2>No Task Available</h2>

renderTask = mainTask.map( (t,i)=>{
  return <div>
    <h5>{t.title}</h5>
    <h6>{t.desc}
      
    </h6>
  </div>
  
})

  return (
  <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold'> Pradyumna ToDo List</h1>
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
