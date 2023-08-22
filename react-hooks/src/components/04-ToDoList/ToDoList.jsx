import {useState} from 'react';
import styled from 'styled-components';

export const ToDoList = () =>{
  const[addToDo, setAddToDo] = useState('')

  const handleClicked = () =>{
    setAddToDo([addToDo])
  } 


  return(
    <>
      <toDoListContainer>
          <h2>To Do List</h2>
          <textarea
          name="text" id="textArea" cols="30" rows="10">
          </textarea>
          <button onClick={handleClicked} className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4'> Agregar Tarea </button>
      </toDoListContainer>
      <p>Acá van las tareas por hacer: {addToDo} </p>
    </>
  )
}

const toDoListContainer = styled.div`
  display: block;

  background-color: red;
  color: white;
  h2{
    color: red;
  }

`