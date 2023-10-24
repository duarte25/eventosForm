import Styles from './Styles.module.css'

export default function DateTime({ text, handleOnChange, ...props }) {
    return (
        <label className={Styles.label}>
            {text}
            <input  {...props}
                onChange={handleOnChange}
                className={Styles.inputbordas}
                required
            />
            <span className={Styles.focusborder}> </span>
        </label>
    )
}