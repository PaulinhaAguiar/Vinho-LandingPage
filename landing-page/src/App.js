import './app.css';
import Header from './components/Header';
import SeeCatalog from './components/SeeCatalog';
import Options from './components/Options';

export default function App(){
  return (
    <div>
      <div className='div-absolute'>
        <Header />
        <div className='div-relative'>
          <SeeCatalog />
          <Options />
        </div>
      </div>
    </div>
  );
}