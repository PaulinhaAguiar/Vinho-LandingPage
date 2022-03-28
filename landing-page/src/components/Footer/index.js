import './footer.css';
import { ImLinkedin } from 'react-icons/im';
import { BsInstagram, BsGithub } from 'react-icons/bs';

export default function Footer(){
    return(
        <div className='footer'>
            <h2>
                © 2022 | All rights reserved | Developed by
                <text className='name'>
                     Ana Paula
                </text>
            </h2>
            <div className='icons'>
                <a href='https://www.linkedin.com/in/anapaula-aguiar'>
                    <ImLinkedin size={20} color='#3E3032' />
                </a>

                <a>
                    <BsInstagram size={20} color='#3E3032' />
                </a>

                <a href='https://github.com/PaulinhaAguiar'>
                    <BsGithub size={20} color='#3E3032' />
                </a>
            </div>
        </div>
    )
}