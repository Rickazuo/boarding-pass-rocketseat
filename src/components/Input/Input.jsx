import styles from "./styles.module.css";

const Input = ({ onChange, value, placeholder }) => {
    return (
        <input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={styles.defaultInput}
        />
    );
};

export default Input;
