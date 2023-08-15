import  { useState } from 'react';

export const ToogleState = () => {
  const [isOn, setIsOn] = useState(false);

  const [colorText, setColorText]= useState('black');
  
  const handleKeyPress = (e) =>{
    if (e.key === 'Enter') {
      if (colorText === 'black') {
        setColorText('green');
      }else{
        setColorText('black')
      }
      
    }
  }

  return (
    <>    
      <p style={{color: colorText}}>Estado: {`${isOn ? 'Encendido' : 'Apagado'}`}</p>
      <button onClick={() => setIsOn(!isOn)}    onKeyDown={handleKeyPress}>Toggle</button>
      
    </>    
  );
}
