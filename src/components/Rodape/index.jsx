import Styles from "./Styles.module.css"

export default function Rodape() {
    return (
        <>
            <footer className={Styles.container}>
                <div className={Styles.footerClean}>
                    <div class={Styles.justifyContentCenter}>
                        <div className={Styles.item}>
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#">Web design</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Hosting</a></li>
                            </ul>
                        </div>
                        <div className={Styles.item}>
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Legacy</a></li>
                            </ul>
                        </div>
                        <div className={Styles.item}>
                            <h3>Careers</h3>
                            <ul>
                                <li><a href="#">Job openings</a></li>
                                <li><a href="#">Employee success</a></li>
                                <li><a href="#">Benefits</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={Styles.itemSocial}>
                        <a href="#">
                            <img src="/facebook.png" />
                        </a>
                        <a href="#">
                            <img src="/instagram.png" />
                        </a>
                        <a href="#">
                            <img src="/twitter.png" />
                        </a>
                        <a href="#">
                            <img src="/linkedin.png" />
                        </a>
                        <p className={Styles.copyright}>Soft Solution © 2023</p>
                    </div>
                </div>
            </footer>
        </>
    )
}