import { Counter } from "./components/01-Counter/Counter"
import { InputText } from "./components/02-InputText/InputText"
import { ToogleState } from './components/03-ToogleState/ToogleState'
import { ToDoList } from "./components/04-ToDoList/ToDoList"
import { Game } from "./components/05-Game/Game"

function App() {
  
  return (
    <div className='w-full h-96 bg-zinc-700 flex flex-col justify-center items-center'>
       {/* <Counter /> 
       <InputText /> */}
       {/* {<ToogleState /> } */}
       {/* <ToDoList/> */}
       <Game/>
    </div>
  )
}

export default App
