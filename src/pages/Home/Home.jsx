import data from "../../api/airport.json";
import styles from "./styles.module.css";
import BoardingPassGeneratorBanner from "../../components/BoardingPassGeneratorBanner/BoardingPassGeneratorBanner";

const Home = () => {
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
