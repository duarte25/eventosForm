import { ST } from "next/dist/shared/lib/utils"
import Styles from "./Styles.module.css"

export default function Rodape() {
    return (

        <footer className={Styles.container}>
            <div class={Styles.rodape}>
                <p>
                    Ta rodando ta funfando
                </p>
                <p>GustavinhoDaVH &copy; 2023</p>
            </div>
        </footer>
    )
}