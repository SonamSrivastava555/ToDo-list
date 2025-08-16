import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './ToDo.css'
import { MdCheck,MdDeleteForever} from "react-icons/md";
import ToDoForm from './ToDoForm';

function App() {
  
  const[task,setTask]=useState([])
  const[time,setTime]=useState("");

const handleSubmitForm=(event)=>{
  event.preventDefault()

   if(!inputValue) return;

   if(task.includes(inputValue)) {
    alert("This is already added in the list")
setInputValue("");
    return;}

  setTask((prevtask)=>[...prevtask,inputValue])

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
  return (
    <>
<div className='todoContainer'>
  <section>
    <header>TODO List</header>
    <h3>{time}</h3>
     </section>
     <ToDoForm/>
     <section className='inputMap'>
     <section >
       <ul>
        {
          task.map((curTask,index)=>{
          return  <li key={index}>
            <span>{curTask}</span>
            <button className='deleteBtn' onClick={()=>handleDelete(curTask)}><MdDeleteForever /></button>
            <button className='checkbtn'><MdCheck /></button>
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
