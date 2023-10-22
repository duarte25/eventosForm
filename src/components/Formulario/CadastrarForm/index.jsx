import axios from "axios"
import styles from "./Styles.module.css"
import { useState } from "react"

export default function Form() {
    const [evento, setEvento] = useState({
        titulo: "",
        descricao: "",
        dataInicio: "",
        dataFim: "",
        local: ""
    })

    const [mensagem, setMensagem] = useState("")

    function inserirEvento(e) {
        e.preventDefault()

        axios.post('http://localhost:3000/eventos', evento)
            .then(resultado => {
                console.log(resultado.data)
                setEvento({
                    titulo: "",
                    descricao: "",
                    dataInicio: "",
                    dataFim: "",
                    local: "",
                })
                setMensagem("Evento cadastrado com sucesso!")
            })
            .catch(erro => console.log(erro))
    }

    return (
        <>
            <form onSubmit={e => inserirEvento(e)} className={styles.formulario}>

                <h2 className={styles.titulo}>Formulário de evento</h2>
                <label className={styles.label}>
                    Titulo
                    <input type="text" className={styles.inputbordas} placeholder="Titulo" required="" value={evento.titulo} onChange={e => setEvento({ ...evento, titulo: e.target.value })} />
                    <span className={styles.focusborder}> <i></i> </span>
                </label>

                <label className={styles.label}>
                    Descrição
                    <input type="text" className={styles.inputbordas} placeholder="descricao" required="" value={evento.descricao} onChange={e => setEvento({ ...evento, descricao: e.target.value })} />
                    <span className={styles.focusborder}> <i></i> </span>
                </label>

                <label className={styles.label}>
                    Data Inicio
                    <input type="date" className={styles.inputbordas} placeholder="dataInicio" required="" value={evento.dataInicio} onChange={e => setEvento({ ...evento, dataInicio: e.target.value })} />
                    <span className={styles.focusborder}> <i></i> </span>
                </label>

                <label className={styles.label}>
                    Data Fim
                    <input type="date" className={styles.inputbordas} placeholder="dataInicio" required="" value={evento.dataFim} onChange={e => setEvento({ ...evento, dataFim: e.target.value })} />
                    <span className={styles.focusborder}> <i></i> </span>
                </label>

                <label className={styles.label}>
                    Local
                    <input type="text" className={styles.inputbordas} placeholder="Local" required="" value={evento.local} onChange={e => setEvento({ ...evento, local: e.target.value })} />
                    <span className={styles.focusborder}> <i></i> </span>
                </label>

                <button className={styles.buttonform}> Enviar</button>
            </form>
        </>
    )
}