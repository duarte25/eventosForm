import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import Cabecalho from "@/components/CabecalhoNew"
import Rodape from "@/components/Rodape"
import Styles from "./Styles.module.css"
import Image from "next/image"
import Link from "next/link";
import Buttom from "@/components/Home/Buttom"
import { ST } from "next/dist/shared/lib/utils"

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
            <div className={Styles.body} style={{ backgroundImage: `url(${evento.imagem})` }}>

                <div className={Styles.body}>
                    <Cabecalho />
                    <div className={Styles.container}>
                        <h1 className={Styles.h1}>{evento.titulo}</h1>
                        <div className={Styles.detalhes}>
                            <div className={Styles.containerDetalhes}>
                                <Image src="/Star.png" width={17} height={17} />
                                <h3>{evento.dataInicio}</h3>
                            </div>
                            <div className={Styles.containerDetalhes}>
                                <Image src="/Star.png" width={17} height={17} />
                                <h3>{evento.dataFim}</h3>
                            </div>
                            <div className={Styles.containerDetalhes}>
                                <Image src="/Star.png" width={15} height={17} />
                                <h3>{evento.local}</h3>
                            </div>
                        </div>

                        <p className={Styles.descricao}>{evento.descricao}</p>

                        <div className={Styles.botoes}>
                            <div className={Styles.botao}>
                                <div>
                                    <Buttom
                                        text="Trailer"
                                        src="/Play.png" />
                                </div>
                                <div>
                                    <Buttom
                                        text="Obter Bilhetes"
                                        src="/nextIcon.png"
                                    />
                                </div>
                            </div>
                                <div className={Styles.botaoAtualizar}>
                                    <Link href={`/eventos/atualizar/${evento.id}`}><h2>Alterar</h2></Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}