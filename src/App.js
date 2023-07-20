import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>Proyecto: Curso Diseño de Sitios Web</code> 
        </p>
        <a
          className="Proyecto Curso Diseño de Sitios Web"
          href="main.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resumen del Curso
        </a>
      </header>
    </div>
  );
}

export default App;
