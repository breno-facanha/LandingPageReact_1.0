import styles from './Main.module.css'
import photo from '../../assets/breno.png'

export default function Main(){
    return (
        <>
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

            <div className="Cards">
                <div className="formacao">teste</div>
                <div className="tecnologias"></div>
                <div className="projetos"></div>
            </div>
        </div>
           
        </>
    )
}