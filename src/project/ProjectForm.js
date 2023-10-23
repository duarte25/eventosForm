import Input from "@/components/Formulario/Input"
import React, { useState, useEffect, useRef } from 'react';
import styles from "./Styles.module.css"
import Buttom from "@/components/Formulario/Buttom";

export default function Form(projectData) {

    const formRef = useRef(null);
    const [project, setProject] = useState(projectData || {})
    const [file, setFiles] = useState(null);

    const submit = async (e) => {
        e.preventDefault();

        // Converta o arquivo para DataURL
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
        }
        reader.onloadend = async () => {
            const base64data = reader.result;

            const updatedProject = {
                ...project,
                imagem: base64data
            };
            await fetch("http://localhost:3000/eventos", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedProject)
            }).then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                })
                .catch(err => console.log(err))
            // Trate a resposta conforme necessário
        };

        // Limpa o input de arquivo
        if (formRef.current) {
            formRef.current.reset();
        }
    };

    function handleChange(e) {
        if (e.target.type === "file") {
            setFiles(e.target.files[0]);
        } else {
            setProject({ ...project, [e.target.name]: e.target.value });
        }
    }

    return (
        <>
            <form onSubmit={submit} ref={formRef} className={styles.formulario}>
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

                <Buttom />
            </form>
        </>
    )
}

