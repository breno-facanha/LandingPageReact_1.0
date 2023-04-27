import styles from './Main.module.css'
import photo from '../../assets/breno.png'

export default function Main(){
    return (
        <div className={styles.main}>
            <div className={styles.QuemSouEu}>
                <div className="nomeDev">
                    <p>Olá seja bem vindo{'(a)'}!</p> 
                    <p>Me Chamo: Breno Façanha.</p>  
                    <p>Sou estudante de desenvolvimento web</p>    
                </div>

                <div className={styles.imgBreno}>
                    <img src={photo} alt="" />
                </div>
            </div>

            <div className={styles.cards}>
                <div className={styles.formacao}>
                    <span>FORMAÇÃO</span>
                    <p>ANALISE E DESENVOLVIMENTO DE SISTEMAS</p>
                </div>

                <div className={styles.tecnologias}>
                    <span>TECNOLOGIAS</span>  
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JAVASCRIPT</p>
                    <p>REACTJS</p>
                </div>

                <div className={styles.projetos}>
                    <span>PROJETOS</span> 
                    <a href="https://breno-facanha.github.io/projeto-explorer-013/" target="__blank"><p>FOCUS TIMER</p></a>
                    <a href="#"><p>LANDING-PAGE</p></a>
                    <a href="https://breno-facanha.github.io/Suporte-Fribal/" target="__blank"><p>SUPORTE</p></a>
                </div>
            </div>
        </div>
    )
}