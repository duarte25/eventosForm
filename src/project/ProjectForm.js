import Input from "@/components/Formulario/Input"
import { useState } from 'react'
import { useEffect } from "react"
import styles from "./Styles.module.css"


export default function Form({ handleSubmit, btnText, projectData }) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:3000/eventos", {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
        console.log(project)
    }

    return (
        <>
            <form onSubmit={submit} className={styles.formulario}>

                <h2 className={styles.titulo}>Formulário de evento</h2>

                <Input
                    type="text"
                    text="Titulo"
                    name="titulo"
                    placeholder="Titulo"
                    handleOnChange={handleChange}
                />

                <Input
                    type="Text"
                    text="Descrição"
                    name="descricao"
                    placeholder="Descrição"
                    handleOnChange={handleChange}
                />

                <Input
                    type="date"
                    text="Data Inicio"
                    name="dataInicio"
                    placeholder="Data Inicio"
                    handleOnChange={handleChange}
                />

                <Input
                    type="date"
                    text="Data Fim"
                    name="dataFim"
                    placeholder="Data Fim"
                    handleOnChange={handleChange}
                />

                <Input
                    type="Text"
                    text="Local"
                    name="local"
                    placeholder="Local"
                    handleOnChange={handleChange}
                />

                <Input
                    type="file"
                    text="Imagem"
                    name="imagem"
                    placeholder="Imagem"
                    multiple accept="image/*"
                    handleOnChange={handleChange}
                />
                <button className={styles.buttonform}> Enviar</button>
            </form>
        </>
    )
}

