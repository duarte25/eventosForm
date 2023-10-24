import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import Styles from "./Styles.module.css"
import Image from "next/image";

export default function EventosHome(){
    
    const [evento, setEvento] = useState({})
    
    const router = useRouter()
    

    useEffect(() => {
        const id = router.query.id

        if(id) {
            axios.get(`http://localhost:3000/eventos/${id}`)
                .then(resultado => setEvento(resultado.data))
        }

    }, [router])
    
    return (
        <>
            <div className={Styles.card}>
                <h1 className={Styles.cardTitulo}>{evento.titulo}</h1>
                <p>Descrição: {evento.descricao}</p>
                <p>Data Inicio: {evento.dataInicio}</p>
                <p>Data Final: {evento.dataFim}</p>
                <p>Local: {evento.local}</p>
                <Image src={evento.imagem} width={400}
                    height={400} />
            </div>
        </>
    )
}