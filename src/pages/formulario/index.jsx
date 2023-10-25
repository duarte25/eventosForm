import Cabecalho from '@/components/Cabecalho';
import ProjectForm from '../../components/Formulario/ProjectForm/ProjectForm'
import Rodape from "@/components/Rodape"
import Styles from "./Styles.module.css"

export default function Index() {

    return (
        <>
            <Cabecalho />
            <div className={Styles.fundo}>
                <ProjectForm />
            </div>
            <Rodape />
        </>
    )
}