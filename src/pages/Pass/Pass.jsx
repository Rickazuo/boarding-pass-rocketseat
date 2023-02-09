import PlanningPassInfo from "../../components/PlanningPassInfo";
import styles from "./styles.module.css";

const Pass = () => {
    return (
        <div>
            <PlanningPassInfo />
            <footer className={styles.footer}>
                <a href="https://rickazuo.github.io/portfolio/">Ricardo</a>
            </footer>
        </div>
    );
};

export default Pass;
