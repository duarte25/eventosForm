import Link from "next/link"
import styles from "./Styles.module.css"

export default function Card({ id, titulo, descricao, dataInicio, dataFim, local}) {
    return (
        <div className={styles.card}>

            <Link href={`/eventos/${id}`}>
                <h2 className={styles.cardTitulo}>{titulo}</h2>
                <div>Local {descricao}</div>
                <div>Data início {dataInicio}</div>
                <div>Data de fim {dataFim}</div>
                <div>Local {local}</div>
            </Link>
        </div>
    )
}