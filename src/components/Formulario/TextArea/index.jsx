import Styles from './Styles.module.css'

export default function Textarea({ text, handleOnChange, ...props }) {
    return (
        <label className={Styles.label}>
            {text}
            <textarea  {...props}
                onChange={handleOnChange} 
                className={Styles.inputbordas}
                required
            />
            <span className={Styles.focusborder}> </span>
        </label>
    )
}