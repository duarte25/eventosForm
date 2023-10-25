import Link from "next/link"
import Styles from "./Styles.module.css"
import Image from "next/image";

export default function Card({ id, titulo, imagem, descricao }) {
    
    return (
        
        <div className={Styles.card}>

            <Link href={`/eventos/${id}`}>
                <Image src={imagem} width={400}
                    height={400} className={Styles.imagem}/>
                <h2 className={Styles.cardTitulo}>{titulo}</h2>  
            </Link>
        </div>
    )
}