import Cabecalho from "@/components/CabecalhoNew"
import Rodape from "@/components/Rodape"
import Styles from "./Styles.module.css"


export default function Homer() {
    return (
        <>
            <div className={Styles.body}>
                <Cabecalho />

                <h1 className={Styles.h1}>Everything everywhere all at once</h1>

            </div>

        </>
    )
}