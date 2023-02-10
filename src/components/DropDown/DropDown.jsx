import styles from "./styles.module.css";

const DropDownButton = ({ onChange, value, options, label }) => {
    return (
        <select value={value} onChange={onChange} className={styles.dropDown}>
            <option value="">--{label}--</option>
            {options.map((option) => (
                <option
                    key={option.codigoIata}
                    className={styles.optionStyle}
                    value={option.aeroporto}
                >
                    {option.aeroporto}
                </option>
            ))}
        </select>
    );
};

export default DropDownButton;
