import styles from "./styles.module.css";

const DropDownButton = ({ onChange, value, options }) => {
    return (
        <select value={value} onChange={onChange} className={styles.dropDown}>
            {options.map((option) => (
                <option className={styles.optionStyle} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default DropDownButton;
