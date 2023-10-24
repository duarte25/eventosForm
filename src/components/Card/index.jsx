import Link from "next/link"
import styles from "./Styles.module.css"
import Image from "next/image";

export default function Card({ id, titulo, imagem, descricao }) {
    
    return (
        
        <div className={styles.card}>

            <Link href={`/eventos/${id}`}>
                <Image src={imagem} width={400}
                    height={400} className={styles.imagem}/>
                <h2 className={styles.cardTitulo}>{titulo}</h2>  
            </Link>
        </div>
    )
}