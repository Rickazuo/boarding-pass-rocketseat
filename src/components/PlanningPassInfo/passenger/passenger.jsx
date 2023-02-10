import styles from "./styles.module.css";

const Passenger = ({ name, seat }) => {
    return (
        <div className={styles.passenger}>
            <div className={styles.passengerTag}>
                <div>Passageiro</div>
                <strong>{name}</strong>
            </div>
            <div className={styles.seatTag}>
                <div>Assento</div>
                <strong>{seat}</strong>
            </div>
        </div>
    );
};

export default Passenger;
