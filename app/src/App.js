import naruto from './Naruto.png';
import './App.css';
import { Quotes } from './components/quotes';

function App() {
  return (
    <div className="Content">
      <Quotes quote={[test]} speaker={'Naruto'} />
      <img className="NarutoImg" src={naruto} alt="Imagem do naruto"/>
    </div>
  );
}

export default App;
