import styles from "./styles.module.css";

const Passenger = () => {
  return (
    <div className={styles.passenger}>
      <div className={styles.passengerTag}>
        <div>Passageiro</div>
        <div>Rodrigo Terron</div>
      </div>
      <div className={styles.seatTag}>
        <div>Assento</div>
        <div>28A</div>
      </div>
    </div>
  );
};

export default Passenger;
