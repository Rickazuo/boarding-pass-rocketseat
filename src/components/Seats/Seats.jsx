import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Seats = ({ setSeat }) => {
    const seats = Array(10).fill(0);
    return (
        <div className={styles.container}>
            <div className={styles.cockpit} />
            <div className={styles.bodyPlane}>
                <div className={styles.plane}>
                    {seats.map((_, index) => (
                        <div className={styles.planeLine}>
                            <button
                                onClick={() => setSeat(`${index + 1}A`)}
                                className={styles.seatButton}
                            >
                                {index + 1}A
                            </button>
                            <button
                                onClick={() => setSeat(`${index + 1}B`)}
                                className={styles.seatButton}
                            >
                                {index + 1}B
                            </button>
                            <div className={styles.separator} />
                            <button
                                onClick={() => setSeat(`${index + 1}C`)}
                                className={styles.seatButton}
                            >
                                {index + 1}C
                            </button>
                            <button
                                onClick={() => setSeat(`${index + 1}D`)}
                                className={styles.seatButton}
                            >
                                {index + 1}D
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Seats;
