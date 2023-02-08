import Boarding from "./boarding/boarding";
import Flight from "./flight/flight";
import Passenger from "./passenger/passenger";

import styles from "./styles.module.css";

const PlanningPassInfo = () => {
    return (
        <div className={styles.background}>
            <div className={styles.boardingPass}>
                <div className={styles.titleFlight}>Cartão de embarque</div>
                <div className={styles.ticket}>
                    <Flight />
                    <div className={styles.divider}></div>
                    <Passenger />
                    <div className={styles.divider}></div>
                    <Boarding />
                </div>
                <div className={styles.footerBoardingPass}>
                    Qualquer problema procure o balcão de atendimento da sua
                    companhia aérea
                </div>
            </div>
        </div>
    );
};

export default PlanningPassInfo;
