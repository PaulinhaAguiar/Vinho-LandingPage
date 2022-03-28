import './seecatalog.css';
import Garrafa from '../../assets/garrafa-vinho.png';

export default function SeeCatalog(){
    return(
        <div className='container'>
            <div className='info'>
                <h2>
                    Estilo que <br></br>
                    aguça o paladar
                </h2>
                <text>
                    Lorem Ipsum is simply dummy text of the printing <br></br> 
                    and typesetting industry. Lorem Ipsum has been <br></br>
                    the industry's standard dummy text ever since the 1500s.
                </text>
                <button>Ver catálogo</button>
            </div>

            <img src={Garrafa} alt='Garrafa de Vinho' width={480} height={580} />
        </div>
    )
}