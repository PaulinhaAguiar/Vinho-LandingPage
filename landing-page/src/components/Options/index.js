import './options.css';
import { CaminhaoSvg } from '../../assets/CaminhaoSvg';
import { MacarraoSvg } from '../../assets/MacarraoSvg';
import { TacaSvg } from '../../assets/TacaSvg';

export default function Options(){
    return(
        <div className='container-options'>
            <div className='icon-info'>
                <CaminhaoSvg />
                <text>
                    Enviado diretamente <br></br>
                    a sua casa
                </text>
            </div>
            <div className='icon-info'>
                <MacarraoSvg />
                <text>
                    As melhores dicas <br></br>
                    de harmonização
                </text>
            </div>
            <div className='icon-info'>
                <TacaSvg />
                <text>
                    Conheça os vinhos <br></br>
                    mais procurados
                </text>
            </div>
        </div>
    )
}