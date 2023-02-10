import styles from "./styles.module.css";
import { getRandomInt } from "../../../utils";

const seats = ["A", "B", "C", "D", "F"];
const Passenger = ({ name }) => {
    return (
        <div className={styles.passenger}>
            <div className={styles.passengerTag}>
                <div>Passageiro</div>
                <strong>{name}</strong>
            </div>
            <div className={styles.seatTag}>
                <div>Assento</div>
                <strong>
                    {getRandomInt(32)}
                    {seats[getRandomInt(5)]}
                </strong>
            </div>
        </div>
    );
};

export default Passenger;
