import './seekquality.css';
import Team from '../../assets/Team.png';
import Tracinho from '../../assets/Tracinho.png';

export default function SeekQuality(){
    return(
        <div className='container-quality'>
            <img src={Team} alt='Team' width={460} height={470} />

            <div className='info-quality'>
                <h2>
                    Buscamos a excelência <br></br>
                    da qualidade
                </h2>
                <img src={Tracinho} alt='Tracinho' width={400} />
                <text>
                    Lorem Ipsum is simply dummy text of the <br></br> 
                    printing and typesetting industry. Lorem Ipsum  <br></br> 
                    has been the industry's standard dummy text ever <br></br>
                    since the 1500s, when a unknown printer took a <br></br>
                    galley of type and scrambled it to make.
                </text>
            </div>
        </div>
    )
}