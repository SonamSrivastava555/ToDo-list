import React from 'react'

function ToDoForm() {
    const[inputValue,setInputValue]=useState("")
    
    function handleInputChange(value){
  setInputValue(value)
 
}
  return (
    <div>
      <section className='InputtodoContainer'>
      <form onSubmit={handleSubmitForm}>
      <input onChange={(e)=>handleInputChange(e.target.value)} value={inputValue} type="text" autoComplete='off' />
      <button className='TaskBtn' type='submit'>Add Task</button>
    </form>
     </section>
    </div>
  )
}

export default ToDoForm
