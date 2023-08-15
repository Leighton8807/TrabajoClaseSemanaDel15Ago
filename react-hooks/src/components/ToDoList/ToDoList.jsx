import { useState, useRef } from 'react';

export const ToDoList = () =>{
  const[addToDo, setAddToDo] = useState('')

  const handleClicked = () =>{
    setAddToDo([addToDo])
  } 


  return(
    <>
    <h2>To Do List</h2>
    <textarea
     onClick={handleClicked} name="text" id="textArea" cols="30" rows="10">
     </textarea>
    <button onClick={handleClicked} className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4'> Agregar Tarea </button>
    <p>Acá van las tareas por hacer: {addToDo} </p>
    </>
  )
}