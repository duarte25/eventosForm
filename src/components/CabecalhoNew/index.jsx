import Styles from "./Styles.module.css"

export default function Cabecalho() {
    return (
        <div className={Styles.cabecalho}>
            <h1>cineflix</h1>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/formulario">Cadastrar</a></li>
            </ul>
        </div>
    )
}