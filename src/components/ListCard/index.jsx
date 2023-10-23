import { useEffect, useState } from 'react'
import axios from "axios"
import Card from '@/components/card'
import Styles from "./Styles.module.css"

export default function ListCard() {

    const [eventos, setEventos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/eventos')
            .then(resultado => setEventos(resultado.data))
    }, [])

    function formatarData(data) {
        const [ano, mes, dia] = data.split('-');
        return `${dia}/${mes}/${ano}`
    }

    return (
        <>
            <div className={Styles.listCard}>

                {eventos.map(e => (
                    <Card
                        id={e.id}
                        titulo={e.titulo}
                        descricao={e.descricao}
                        dataInicio={formatarData(e.dataInicio)}
                        dataFim={formatarData(e.dataFim)}
                        local={(e.local)}
                        imagem={(e.imagem)}
                    />
                ))}
            </div>
        </>
    )
}