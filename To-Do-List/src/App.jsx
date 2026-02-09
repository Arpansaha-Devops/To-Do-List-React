import { useState } from 'react'
import "./App.css"


function App() {

 const [Task, setTask] = useState([])
 const [newTask, setnewTask] = useState("")

 

function addTask() {
if (newTask.trim() !== "") {
 setTask(Task => [...Task,newTask])
  setnewTask("")
}
   
}

function removeTask(index) {
  setTask(Task.filter((_,i) => i !== index))
}

function moveTaskUp(index) {
  if (index === 0) return

  const updated = [...Task];
  [updated[index], updated[index - 1]] =
    [updated[index - 1], updated[index]]

  setTask(updated)
}

function moveTaskDown(index) {
  if (index === Task.length - 1) return

  const updated = [...Task]
  ;[updated[index], updated[index + 1]] =
    [updated[index + 1], updated[index]]

  setTask(updated)
}
 
  return (
    <>
     <h1>To-Do-List</h1>
     <input type="text" value={newTask} placeholder='Enter Task...' onChange={(e) => setnewTask(e.target.value)} />
     <button onClick={addTask} >Add Task</button>


<ol>

  {
    Task.map((item,index) => (
      <li key={index} > {item}
       <button onClick={ () =>  removeTask(index)} >🗑️</button>
       <button onClick={() => moveTaskUp(index)} > 👆 </button>
       <button onClick={() => moveTaskDown(index)} > 👇 </button>
      
       </li>
    ))
  }
</ol>

    </>
  )
}

export default App
