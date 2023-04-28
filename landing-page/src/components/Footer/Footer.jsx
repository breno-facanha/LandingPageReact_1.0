import photoLinkedin from '../../assets/linkedin.png'
import photoGitHub from '../../assets/github.png'
import photoGmail from '../../assets/gmail.png'

import styles from './Footer.module.css'

export default function Footer(){
    return (
        <div className={styles.contatos}>
            <a 
                href="https://www.linkedin.com/in/breno-fa%C3%A7anha-5a57a3b6/" 
                    target="__blank"> 
                <img src={photoLinkedin} alt="" />
            </a>
            
            <a 
                href="https://github.com/breno-facanha"
                    target="___blank"> 
                <img src={photoGitHub} alt="" />
            </a>

            <a 
                href="mailto:brenofacanha.ti@gmail.com"
                    target="___blank"> 
                <img src={photoGmail} alt="" /></a>
        </div>
    )
}

