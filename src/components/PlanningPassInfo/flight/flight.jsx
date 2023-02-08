import styles from "./styles.module.css";
import plane from "../../../assets/plane.svg";

const Flight = () => {
  return (
    <div className={styles.flight}>
      <div className={styles.headerFlight}>
        <div className={styles.flightNumber}>
          <div>Voo</div>
          <div>RS245416</div>
        </div>
        <div className={styles.flightDate}>
          <div>Data</div>
          <div>25/03/2023</div>
        </div>
      </div>
      <div className={styles.footerFlight}>
        <div className={styles.departure}>
          <div className={styles.city}>São Paulo</div>
          <div className={styles.abreviationAirport}>GRU</div>
          <div className={styles.hour}>17:00</div>
        </div>
        <div className={styles.planeImage}>
          <img src={plane} alt="a little plane image" />
        </div>
        <div className={styles.arrival}>
          <div className={styles.city}>São Francisco</div>
          <div className={styles.abreviationAirport}>SFO</div>
          <div className={styles.hour}>04:48</div>
        </div>
      </div>
    </div>
  );
};

export default Flight;
