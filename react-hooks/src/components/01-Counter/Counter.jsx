import { useState, useEffect } from 'react'

export const Counter = () => {

  const [count, setCount] = useState(0);
  const [styleColor, setStyleColor] = useState('')

   useEffect (() => {
    if (count === 10) {
      setStyleColor('green')  
    }else if (count === 15){
      setStyleColor('black')
    }else if (count >= 20) {
      setStyleColor('yellow')
    }

  },[count]);

  const handleAdd = () => {setCount(count+1)}
  const handleSubstract = () => {setCount(count-1)}
  const handleReset = () => {setCount(0)}

  return (
    <>
      <p className='text-4xl text-sky-400' style={{color: styleColor}}  >Contador: {count}</p>
      
      <button className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4' onClick={handleAdd}>Incrementar</button>   

      <button className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4' onClick={handleSubstract}>Substraer</button>   

      <button className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4' onClick={handleReset}>resetear</button>  
    </>
    
  )
}

