import Styles from './Styles.module.css'
import Image from 'next/image'


export default function Buttom({ id,text, src }) {
    return (
        <button className={Styles.button}>
            <h2>{text}</h2>
            <Image src={src} width={15} height={20} />
        </button>
    )
}