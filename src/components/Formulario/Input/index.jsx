import styles from "./Styles.module.css"

export default function Input({ type, text, name, placeholder, handleOnChange, value }) {
    return (
        <div>
            <label htmlFor={name}>{text}:</label>
            <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value} />
        </div>
    )
}

<input type="text" className={styles.inputbordas} placeholder="Titulo" required="" value={evento.titulo} onChange={e => setEvento({ ...evento, titulo: e.target.value })} />