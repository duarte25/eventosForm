import Link from "next/link"
import styles from "./Styles.module.css"
import Image from "next/image";

export default function Card({ id, titulo, descricao, dataInicio, dataFim, local, imagem }) {
    
    return (
        
        <div className={styles.card}>

            <Link href={`/eventos/${id}`}>
                <h2 className={styles.cardTitulo}>{titulo}</h2>
                <div>Local {descricao}</div>
                <div>Data início {dataInicio}</div>
                <div>Data de fim {dataFim}</div>
                <div>Local {local}</div>
                <Image src={imagem} width={400}
                    height={400} className={styles.imagem}/>
            </Link>
        </div>
    )
}