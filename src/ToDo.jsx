import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './ToDo.css'
import { MdCheck,MdDeleteForever} from "react-icons/md";


function App() {
  
  const[task,setTask]=useState([])
  const[time,setTime]=useState("");
   const[inputValue,setInputValue]=useState("")
    
    function handleInputChange(value){
  setInputValue(value)
 
}

const handleSubmitForm=(event)=>{
  event.preventDefault()

   if(!inputValue) return;

   if(task.includes(inputValue)) {
    alert("This is already added in the list")
    
   
setInputValue("");
    return;}

  setTask((prevtask)=>[...prevtask,{text:inputValue, completed:false}])

  setInputValue("");

}

// time and date
useEffect(()=>{
   const interval= setInterval(() => {
  const now=new Date();
const formatedDate=now.toLocaleDateString();
const formateTime=now.toLocaleTimeString();
  setTime(`${formatedDate}-${formateTime}`)
}, 1000);
return ()=> clearInterval(interval)

},[])




const handleDelete=(value)=>{
  console.log(task)
 console.log(value)
 const updateTask=task.filter((curTask)=> curTask!==value
 )
 setTask(updateTask)
}
 // completed task function
const handleToggleComplete = (index) => {
  setTask((prevTasks) =>
    prevTasks.map((curTask, i) =>
      i === index ? { ...curTask, completed: !curTask.completed } : curTask
    )
  );
};

  return (
    <>
<div className='todoContainer'>
  <section>
    <header>TODO List</header>
    <h3>{time}</h3>
     </section>
    
        <div>
      <section className='InputtodoContainer'>
      <form onSubmit={handleSubmitForm}>
      <input onChange={(e)=>handleInputChange(e.target.value)} value={inputValue} type="text" autoComplete='off' />
      <button className='TaskBtn' type='submit'>Add Task</button>
    </form>
     </section>
    </div>
     <section className='inputMap'>
     <section >
       <ul>
        {
          task.map((curTask,index)=>{
          return  <li key={index}>
            <span style={{ textDecoration: curTask.completed ? "line-through" : "none" }}>
          {curTask.text}
        </span>
            <button className='deleteBtn' onClick={()=>handleDelete(curTask)}><MdDeleteForever /></button>
           <button className='checkbtn' onClick={() => handleToggleComplete(index)}>
          <MdCheck />
        </button>
          </li>
          })
        }
      </ul>
     </section>
     <section>
      <button className='clearBtn' onClick={()=>setTask([])}>Clear All</button>
     </section>
     </section>
</div>
  
    
 
      
    </>
  )
}

export default App
