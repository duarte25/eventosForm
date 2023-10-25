import Cabecalho from "@/components/Cabecalho";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Styles from './Styles.module.css';
import Input from '@/components/Formulario/Input';
import Textarea from '@/components/Formulario/TextArea';
import DateTime from '@/components/Formulario/DateTime';
import Buttom from "@/components/Formulario/Buttom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rodape from "@/components/Rodape";

export default function Atualizar() {
    const [evento, setEvento] = useState({
        titulo: '',
        descricao: '',
        dataInicio: '',
        dataFim: '',
        local: '',
        imagem: '',
    });

    const router = useRouter();

    useEffect(() => {
        const id = router.query.id;

        if (id) {
            axios.get(`http://localhost:3000/eventos/${id}`)
                .then(resultado => setEvento(resultado.data));
        }
    }, [router]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEvento({ ...evento, [name]: value });
    };

    const handleImagem = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const imageDataUrl = e.target.result;
                setEvento({ ...evento, imagem: imageDataUrl });
            };

            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = router.query.id;

        axios.patch(`http://localhost:3000/eventos/${id}`, evento)
            .then(resultado => {
                setEvento(resultado.data);
                toast.success('O evento foi alterado com sucesso!');
            })
            .catch((erro) => {
                console.log(erro);
                toast.error('Ocorreu um erro ao alterar o evento!');
            });
    };

    return (
        <div>
            <ToastContainer />
            <Cabecalho />
            <div className={Styles.fundo}>
                <form onSubmit={handleSubmit} className={Styles.formulario}>
                <h2 className={Styles.titulo}>Alterando o evento</h2>
                
                <Input
                    type="text"
                    text="Titulo"
                    name="titulo"
                    placeholder="Titulo"
                    value={evento.titulo}
                    handleOnChange={handleChange}
                />

                <Textarea
                    type="Text"
                    text="Descrição"
                    name="descricao"
                    placeholder="Descrição"
                    value={evento.descricao}
                    handleOnChange={handleChange}
                />

                <DateTime 
                    type="date"
                    text="Data Inicio"
                    name="dataInicio"
                    placeholder="Data Inicio"
                    value={evento.dataInicio}                 
                    handleOnChange={handleChange}
                />

                <DateTime   
                    type="date"
                    text="Data Fim"
                    name="dataFim"
                    placeholder="Data Fim"
                    value={evento.dataFim}
                    handleOnChange={handleChange}
                />

                <Input
                    type="Text"
                    text="Local"
                    name="local"
                    placeholder="Local"
                    value={evento.local}
                    handleOnChange={handleChange}
                />

                <Input
                    type="file"
                    text="Imagem"
                    name="imagem"
                    placeholder="Imagem"
                    multiple accept="image/*"
                    value={evento.ima}
                    handleOnChange={handleImagem}
                />

                <Buttom />
            </form>
            </div>
            <Rodape/>
        </div>
    );
}