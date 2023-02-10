import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import data from "../../api/airport.json";
import styles from "./styles.module.css";
import BoardingPassGeneratorBanner from "../../components/BoardingPassGeneratorBanner/BoardingPassGeneratorBanner";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const flight = localStorage.getItem("flight");
        if (flight) navigate("/pass");
    }, []);

    return (
        <div className={styles.homePageBackground}>
            <div>Boarding Pass Generator</div>
            <div className={styles.middleBanner}>
                <BoardingPassGeneratorBanner airports={data} />
            </div>
        </div>
    );
};

export default Home;
