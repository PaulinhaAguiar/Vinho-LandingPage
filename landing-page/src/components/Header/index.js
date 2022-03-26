import './header.css';
import { LogoSvg } from '../../assets/LogoSvg';

export default function Header(){
    return(
        <div className='container-header'>
            <LogoSvg />
            <div className='header-item'>
                <a>Catálogo</a>
                <a>Sobre nós</a>
                <button>Garantir Ingresso</button>
            </div>
        </div>
    )
}