import styles from "./styles.module.css";
import qrcode from "../../../assets/qrcode.svg";
import { getRandomInt } from "../../../utils";

const Boarding = ({ time }) => {
    return (
        <div className={styles.boardingTag}>
            <div className={styles.boardingContainer}>
                <div className={styles.boardingInfo}>
                    <div className={styles.boardingTime}>
                        <div className={styles.spacedTitle}>Embarque</div>
                        <div>{time}</div>
                    </div>
                    <div className={styles.boardingTerminal}>
                        <div>Terminal</div>
                        <strong>{getRandomInt(6)}</strong>
                    </div>
                    <div className={styles.boardingGate}>
                        <div>Portão</div>
                        <strong>{getRandomInt(30)}</strong>
                    </div>
                </div>
                <div className={styles.boardingQrcode}>
                    <div>
                        <img src={qrcode} alt="qrcode image" />
                    </div>
                    <div>Grupo de embarque: {getRandomInt(3)}</div>
                </div>
            </div>
            <div className={styles.hourAtention}>
                <strong>Atenção:</strong> o portão fecha {time}
            </div>
        </div>
    );
};

export default Boarding;
