import styles from "./styles.module.css";
import qrcode from "../../../assets/qrcode.svg";

const Boarding = () => {
    return (
        <div className={styles.boardingTag}>
            <div className={styles.boardingContainer}>
                <div className={styles.boardingInfo}>
                    <div className={styles.boardingTime}>
                        <div className={styles.spacedTitle}>Embarque</div>
                        <div>16:15</div>
                    </div>
                    <div className={styles.boardingTerminal}>
                        <div>Terminal</div>
                        <strong>2</strong>
                    </div>
                    <div className={styles.boardingGate}>
                        <div>Portão</div>
                        <strong>15</strong>
                    </div>
                </div>
                <div className={styles.boardingQrcode}>
                    <div>
                        <img src={qrcode} alt="qrcode image" />
                    </div>
                    <div>Grupo de embarque: 3</div>
                </div>
            </div>
            <div className={styles.hourAtention}>
                <strong>Atenção:</strong> o portão fecha 16:45
            </div>
        </div>
    );
};

export default Boarding;
