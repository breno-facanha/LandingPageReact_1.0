import photoLinkedin from '../../assets/linkedin.png'
import photoGitHub from '../../assets/github.png'
import photoGmail from '../../assets/gmail.png'

import styles from './Footer.module.css'

export default function Footer(){
    return (
        <div className='contatos'>
            <a href=""> <img src={photoLinkedin} alt="" />Linkedin</a>
            <a href=""> <img src={photoGitHub} alt="" />GitHub</a>
            <a href=""> <img src={photoGmail} alt="" />Email</a>
        </div>
    )
}