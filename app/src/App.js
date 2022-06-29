import naruto from './Naruto.png';
import './App.css';
import { Quotes } from '../../components';

function App() {
  return (
    <div className="Content">
      <Quotes quote={'ok'} speaker={'Speaker'} />
      <img className="NarutoImg" src={naruto} alt="Imagem do naruto"/>
    </div>
  );
}

export default App;
