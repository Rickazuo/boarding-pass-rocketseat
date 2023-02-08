import styles from "./styles.module.css";
import plane from "../../../assets/plane.svg";

const Flight = () => {
    return (
        <div className={styles.flight}>
            <div className={styles.headerFlight}>
                <div className={styles.flightNumber}>
                    <div>Voo</div>
                    <strong>RS245416</strong>
                </div>
                <div className={styles.flightDate}>
                    <div>Data</div>
                    <strong>25/03/2023</strong>
                </div>
            </div>
            <div className={styles.footerFlight}>
                <div className={styles.departure}>
                    <div className={styles.city}>São Paulo</div>
                    <strong className={styles.abreviationAirport}>GRU</strong>
                    <div className={styles.hour}>17:00</div>
                </div>
                <div className={styles.planeImage}>
                    <img src={plane} alt="a little plane image" />
                </div>
                <div className={styles.arrival}>
                    <div className={styles.city}>São Francisco</div>
                    <strong className={styles.abreviationAirport}>SFO</strong>
                    <div className={styles.hour}>04:48</div>
                </div>
            </div>
        </div>
    );
};

export default Flight;
