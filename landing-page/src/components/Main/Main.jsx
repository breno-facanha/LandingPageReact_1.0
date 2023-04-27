import styles from './Main.module.css'
import photoBreno from '../../assets/breno.png'
import photoGraduate from '../../assets/graduate.png'
import photoProject from '../../assets/project.png'
import photoList from '../../assets/list.png'

export default function Main(){
    return (
        <div className={styles.main}>
            <div className={styles.QuemSouEu}>
                <div className={styles.nomeDev}>
                    <p>Olá seja bem vindo{'(a)'}!</p> 
                    <p>Me Chamo: Breno Façanha.</p>  
                    <p>Sou estudante de desenvolvimento web</p>    
                </div>

                <div className={styles.imgBreno}>
                    <img src={photoBreno} alt="" />
                </div>
            </div>

            <div className={styles.cards}>
                <div className={styles.formacao}>
                    <img src={photoGraduate} alt="" />
                    <span>FORMAÇÃO</span>
                    <p>ANALISE E DESENVOLVIMENTO DE SISTEMAS</p>
                </div>

                <div className={styles.tecnologias}>
                    <img src={photoList} alt="" />
                    <span>TECNOLOGIAS</span>  
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JAVASCRIPT</p>
                    <p>REACTJS</p>
                </div>

                <div className={styles.projetos}>
                    <img src={photoProject} alt="" />
                    <span>PROJETOS</span> 
                    <a href="https://breno-facanha.github.io/projeto-explorer-013/" target="__blank"><p>FOCUS TIMER</p></a>
                    <a href="#"><p>LANDING-PAGE</p></a>
                    <a href="https://breno-facanha.github.io/Suporte-Fribal/" target="__blank"><p>SUPORTE</p></a>
                </div>
            </div>
        </div>
    )
}