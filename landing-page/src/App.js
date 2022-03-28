import './app.css';
import Header from './components/Header';
import SeeCatalog from './components/SeeCatalog';
import Options from './components/Options';
import SeekQuality from './components/SeekQuality';
import Festival from './components/Festival';
import Footer from './components/Footer';

export default function App(){
  return (
    <div>
      <div className='div-absolute'>
        <Header />
        <div className='div-relative'>
          <SeeCatalog />
          <Options />
          <SeekQuality />
          <Festival />
          <Footer />
        </div>
      </div>
    </div>
  );
}