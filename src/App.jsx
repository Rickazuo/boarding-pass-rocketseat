import PlanningPassInfo from "./components/PlanningPassInfo";
import styles from "./App.module.css";

function App() {
    return (
        <div>
            <PlanningPassInfo />
            <footer className={styles.footer}>
                Made by <a href="https://gsajulia.github.io/">Julia </a>and{" "}
                <a href="https://rickazuo.github.io/portfolio/">Ricardo</a>
            </footer>
        </div>
    );
}

export default App;
