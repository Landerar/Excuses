import { useState } from 'react';


const AddExcusePart = () => {
  const [type, setType] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!type || !text) {
      setError('Todos los campos son obligatorios');
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/excuses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type, text }),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        setType('');
        setText('');
        setSuccess('Parte de excusa añadida con éxito');
      }
    } catch (error) {
      setError('Error al añadir la parte de excusa');
    }
  };

  return (
    <div className="add-excuse-part">
      <h1>Añadir Parte de Excusa</h1>
      <p>¿Tienes una idea brillante para una excusa? ¡Añádela aquí!</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tipo:</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Seleccionar tipo</option>
            <option value="introduccion">Introducción</option>
            <option value="sujeto">Sujeto</option>
            <option value="verbo">Verbo</option>
            <option value="objeto">Objeto</option>
            <option value="justificacion">Justificación</option>
          </select>
        </div>
        <div>
          <label>Texto:</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
        <button type="submit">Añadir</button>
      </form>
      <p>Ayuda a la humanidad a tener una lista infinita de excusas creativas.</p>
    </div>
  );
};

export default AddExcusePart;
