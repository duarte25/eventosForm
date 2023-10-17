import styles from "./Styles.module.css"

export default function Input({ type, placeholder}) {
    return (
        <div className={styles.input}>
            <input type={type} placeholder={placeholder} />
        </div>
    )
}
