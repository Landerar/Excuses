import { useState } from 'react';


const ExcuseGenerator = () => {
  const [excuse, setExcuse] = useState('');

  const generateExcuse = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/excuses/generate`);
      const data = await response.json();
      setExcuse(data.data);
    } catch (error) {
      console.error('Error generating excuse', error);
    }
  };

  return (
    <div className="excuse-generator">
      <h1>Generador de Excusas</h1>
      <p>
        ¿Necesitas una excusa rápida para salir de un compromiso?
        <br />¿Llegaste tarde al trabajo y no sabes qué decir? 
        <br />¡No te preocupes más! Nuestro Generador de Excusas está aquí para salvarte.
        <br /> Con un solo clic, tendrás la excusa perfecta para cualquier situación.
      </p>
      <button onClick={generateExcuse}>Generar Excusa</button>
      {excuse && <p className="generated-excuse">{excuse}</p>}
    </div>
  );
};

export default ExcuseGenerator;