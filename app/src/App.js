import naruto from './Naruto.png';
import './App.css';

function App() {
  return (
    <div className="Content">
      <p>Naruto </p>
      <button> Jutsu</button>
      <img src={naruto} alt="Imagem do naruto"/>
    </div>
  );
}

export default App;
