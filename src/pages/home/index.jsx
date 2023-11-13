import ListCard from "@/components/ListCard"
import Cabecalho from "@/components/CabecalhoNew"
import Rodape from "@/components/Rodape"
import Styles from "./Styles.module.css"


export default function Home() {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.body}>
          <Cabecalho />
          <div className={Styles.introducao}>
            <h1>O palco das grandes emoções, onde cada cena é uma experiência única.</h1>
            <div className={Styles.caixaSearch}>
              <input className={Styles.caixaTexto} type="text" name="" placeholder="Pesquisar..." />
              <a class={Styles.botaoSearch}>
                <img src="/pesquisa.png" />
                <i className={Styles.Fasearch}></i>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <ListCard />
        <hr/>
        <Rodape/>
      </div >
    </>
  )
}