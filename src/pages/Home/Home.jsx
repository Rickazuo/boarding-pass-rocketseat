import { useEffect } from "react";
import * as api from "../../api/flights";
import styles from "./styles.module.css";
import BoardingPassGeneratorBanner from "../../components/BoardingPassGeneratorBanner/BoardingPassGeneratorBanner";

const Home = () => {
    useEffect(() => {
        const getFlights = async () => {
            const response = await api.getFlights();
        };
        getFlights();
    }, []);
    return (
        <div className="teste">
            <div className={styles.homePageBackground}>
                <div>Board Pass Generator</div>
                <div className={styles.middleBanner}>
                    <BoardingPassGeneratorBanner />
                </div>
            </div>
        </div>
    );
};

export default Home;
