import naruto from './Naruto.png';
import './App.css';
import { Quotes } from './components/quotes/Quotes';

function App() {
  return (
    <div className="Content">
      <Quotes quote={'ok'} speaker={'Naruto'} />
      <img className="NarutoImg" src={naruto} alt="Imagem do naruto"/>
    </div>
  );
}

export default App;
