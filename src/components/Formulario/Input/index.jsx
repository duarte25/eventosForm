import Styles from './Styles.module.css'

export default function Input({ text, handleOnChange, ...props }) {
    return (
        <label className={Styles.label}>
            {text}
            <input  {...props}
                onChange={handleOnChange}
                className={Styles.inputbordas}
            />
            <span className={Styles.focusborder}> </span>
        </label>
    )
}