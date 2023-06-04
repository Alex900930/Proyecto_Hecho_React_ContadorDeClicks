import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
  const [contadorClicks, setContadorClicks] = useState(0);
  
  function manejadorClick(){
    setContadorClicks(contadorClicks + 1);
  }

  function resetearClick(){
    setContadorClicks(0);
  }

  return (
    <div className="App">
      <div className="estilos-logo">
        <h1>"Contador de FreeCodeCamp"</h1>
            
      </div>
      <div className="componentes">
        <Contador contadorClicks={contadorClicks}/>
        <Boton texto="Click" esClick={true} manejadorClick={manejadorClick} />
        <Boton texto="Reiniciar" esClick={false} manejadorClick={resetearClick} />
      </div>

    </div>
  );
}

export default App;
