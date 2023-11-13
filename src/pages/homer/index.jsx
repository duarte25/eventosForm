import Cabecalho from "@/components/CabecalhoNew"
import Rodape from "@/components/Rodape"
import Styles from "./Styles.module.css"
import Image from "next/image"
import Buttom from "@/components/Home/Buttom"

export default function Homer() {
    return (
        <>
            <div className={Styles.body}>
                <Cabecalho />
                <div className={Styles.container}>
                    <h1 className={Styles.h1}>Esquadrão suicida</h1>
                    <div className={Styles.detalhes}>
                        <div className={Styles.containerDetalhes}>
                            <Image src="/Star.png" width={17} height={17} />
                            <h3>2 Hr 10</h3>
                        </div>
                        <div className={Styles.containerDetalhes}>
                            <Image src="/Star.png" width={17} height={17} />
                            <h3>4 de agosto de 1016 </h3>
                        </div>
                        <div className={Styles.containerDetalhes}>
                            <Image src="/Star.png" width={15} height={17} />
                            <h3>USA</h3>
                        </div>
                    </div>

                    <p className={Styles.descricao}>Um time dos mais perigosos e encarcerados supervilões são contratados por uma agência secreta do governo, para combater uma poderosa entidade. No entanto, quando eles percebem que não foram escolhidos apenas para ter sucesso, mas também por sua óbvia culpa quando inevitavelmente falharem, terão que decidir se vale a pena ou não continuar correndo risco de morte.</p>

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

                </div>
            </div>

        </>
    )
}