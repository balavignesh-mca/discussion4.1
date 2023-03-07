import {useState} from 'react';
import './style.css';

export default function TaskTracker() {
    const [task,setTask] = useState([])
    const [value,setValue] = useState('')
   
    //adding new task
    function handlesubmit(e) {
        e.preventDefault();
         setTask([...task,value])
         setValue("")
    }

    //delete task 
    function handledelete(index){
        let my_task=[...task]
        my_task.splice(index,1)
        setTask(my_task)
    }
const newTask = task.map((item,index) =><li>{item} <button onClick={()=>handledelete(index)}>(-)</button></li>)

    return(
        <>
        <h1>Todo List</h1>
        
        {newTask}
        <form onSubmit={handlesubmit}>
       
        <input value={value} onChange={e=>setValue(e.target.value)} id='inputEvent' type="text" placeholder='Add Todo...' />
    
        </form>
        </>
    )
}