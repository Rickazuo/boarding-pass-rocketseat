import styles from "./styles.module.css";

const Input = ({ onChange, value, placeholder, ...props }) => {
    return (
        <input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={styles.defaultInput}
            {...props}
        />
    );
};

export default Input;
