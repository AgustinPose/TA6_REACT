import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [datos, setDatos] = useState([]);
  const [estadoInput, setEstadoInput] = useState('');

  const handleInputChange = (e) => {
    setEstadoInput(e.target.value);
  };

  const agregarTarea = () => {
    if (estadoInput.trim() !== '') {
      setDatos([...datos, estadoInput]);
      setEstadoInput('');
    }
  };

  const eliminarTarea = (index) => {
    const nuevaLista = [...datos];
    nuevaLista.splice(index, 1);
    setDatos(nuevaLista);
  };

  useEffect(() => {
    console.log("Datos actualizados:", datos);
  }, [datos]);


  return (
    <div className="App">
      <h1>Lista de Tareas</h1>

      <input type='text' value={estadoInput} onChange={handleInputChange} placeholder='Ingrese una tarea nueva' />
      <button onClick={agregarTarea}>Agregar Tarea</button>

      <ul>
        {datos.map((tarea, index) => (
          <li key={index}>{tarea}
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </li>

        ))}


      </ul>

    </div>
  );
}

export default App;
