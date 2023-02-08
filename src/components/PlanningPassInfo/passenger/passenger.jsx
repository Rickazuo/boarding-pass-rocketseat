import styles from "./styles.module.css";

const Passenger = () => {
    return (
        <div className={styles.passenger}>
            <div className={styles.passengerTag}>
                <div>Passageiro</div>
                <strong>Rodrigo Terron</strong>
            </div>
            <div className={styles.seatTag}>
                <div>Assento</div>
                <strong>28A</strong>
            </div>
        </div>
    );
};

export default Passenger;
