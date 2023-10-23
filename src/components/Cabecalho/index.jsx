import styles from "./Styles.module.css"

export default function Cabecalho() {
    return (
        <div className={styles.cabecalho}>
            <h1>cineflix</h1>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Cadastrar</a></li>
                <li><a href="">Atualizar</a></li>
            </ul>
        </div>
    )
}