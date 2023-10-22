import Styles from './Styles.module.css'

export default function Input({ type, text, name, placeholder, handleOnChange, value }) {
    return (
        <label className={Styles.label}>
            {text}
            <input type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
                className={Styles.inputbordas}
            />
            <span className={Styles.focusborder}> </span>
        </label>
    )
}