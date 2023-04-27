import styles from './Header.module.css'

export default function Header(){
    return (
        <div className={styles.cabecalho}>
            <a href="">Home</a>
            <a href="">Sobre</a>
            <a href="">Contatos</a>
        </div>
    )
}