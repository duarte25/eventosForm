import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import Styles from "./Styles.module.css"
import Image from "next/image";
import Link from "next/link";
import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";

export default function EventosHome() {

    const [evento, setEvento] = useState({})

    const router = useRouter()


    useEffect(() => {
        const id = router.query.id

        if (id) {
            axios.get(`http://localhost:3000/eventos/${id}`)
                .then(resultado => setEvento(resultado.data))
        }

    }, [router])

    return (
        <>
            <Cabecalho />
            <div className={Styles.card}>
                <h1 className={Styles.cardTitulo}>{evento.titulo}</h1>
                <Image src={evento.imagem} width={400}
                    height={400} />
                <p>Descrição: {evento.descricao}</p>
                <p>Data Inicio: {evento.dataInicio}</p>
                <p>Data Final: {evento.dataFim}</p>
                <p>Local: {evento.local}</p>
                <button className={Styles.link}>
                    <Link  href={`/eventos/atualizar/${evento.id}`}>Alterar Evento</Link>
                </button>

            </div>
            <Rodape />
        </>
    )
}