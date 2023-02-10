import styles from "./styles.module.css";
import plane from "../../../assets/plane.svg";
import { getRandomInt } from "../../../utils";

const Flight = ({ date, departure, destination, time }) => {
    return (
        <div className={styles.flight}>
            <div className={styles.headerFlight}>
                <div className={styles.flightNumber}>
                    <div>Voo</div>
                    <strong>RS{getRandomInt(245416)}</strong>
                </div>
                <div className={styles.flightDate}>
                    <div>Data</div>
                    <strong>{date}</strong>
                </div>
            </div>
            <div className={styles.footerFlight}>
                <div className={styles.departure}>
                    <div className={styles.city}>{departure.estado}</div>
                    <strong className={styles.abreviationAirport}>
                        {departure.codigoIata}
                    </strong>
                    <div className={styles.hour}>{time}</div>
                </div>
                <div className={styles.planeImage}>
                    <img src={plane} alt="a little plane image" />
                </div>
                <div className={styles.arrival}>
                    <div className={styles.city}>{destination.estado}</div>
                    <strong className={styles.abreviationAirport}>
                        {destination.codigoIata}
                    </strong>
                    <div className={styles.hour}>04:48</div>
                </div>
            </div>
        </div>
    );
};

export default Flight;
