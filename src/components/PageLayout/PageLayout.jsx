import PlanningPassInfo from "../../components/PlanningPassInfo";
import styles from "./styles.module.css";

const PageLayout = ({ children }) => {
    return (
        <div>
            {children}
            <footer className={styles.footer}>
                Made by <a href="https://gsajulia.github.io/">Julia </a>and{" "}
                <a href="https://rickazuo.github.io/portfolio/">Ricardo</a>
            </footer>
        </div>
    );
};

export default PageLayout;
