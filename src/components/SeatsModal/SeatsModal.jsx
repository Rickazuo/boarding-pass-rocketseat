import styles from "./styles.module.css";
import Seats from "../Seats/Seats";
const SeatsModal = ({ onClose, setSeat }) => {
    return (
        <div className={styles.popupBox}>
            <div className={styles.box}>
                <div className={styles.iconContainer}>
                    <span className={styles.closeIcon} onClick={onClose}>
                        x
                    </span>
                </div>
                <Seats setSeat={setSeat} />
            </div>
        </div>
    );
};

export default SeatsModal;
