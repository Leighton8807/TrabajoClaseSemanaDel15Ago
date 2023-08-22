import React, {useState, useEffect} from 'react'

const respuestaCPU = ['Piedra','Papel','Tijera']

export const Game = () => {
  const [paper, setPaper] = useState('Papel')
  const [scissors, setScissors] = useState('Tijera')
  const [rock, setRock]= useState('Rock')
  const [resultado, setResultado]= useState(' ')
  const [CPU, setCPU]= useState(' ')


  const handleRock = () => {setRock}
  const handlePaper = () => {setPaper}
  const handleScissors = () => {setScissors}
  


  const jugar = (a) =>{
    //Constante para que el computador seleccione una opcion al azar.
    const CPU = respuestaCPU[Math.floor(Math.random()*respuestaCPU.length)];

    // Determina el resultado del juego
    if (a === CPU ) {
      setResultado('Empate')
    } else if 
      ((a === 'Piedra' && CPU === 'Tijera') ||
      (a === 'Papel'&& CPU === 'Piedra') ||
      (a === 'Tijera' && CPU === 'Papel')) {
        setResultado('Ganaste');      
    } else {
      setResultado('Perdiste');
    }
    // Actualizar las elecciones
    setCPU(CPU)
    
  }



  return (
    <>
    <h2 className='text-4xl text-sky-400'>Piedra, Papel o Tijera</h2> <br/>
    <div>
      <button className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4' onClick={handleRock}>PIEDRA</button>
      <button className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4' onClick={handlePaper}>PAPEL</button> 
      <button className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4' onClick={handleScissors}>TIJERA</button>  
      <p> Su Respuesta es:  </p>
    </div>
    </>
  )
}
