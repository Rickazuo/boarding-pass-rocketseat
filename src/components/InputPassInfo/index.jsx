import BoardingPassGeneratorBanner from "./BoardingPassGeneratorBanner/BoardingPassGeneratorBanner";
import styles from "../InputPassInfo/styles.module.css";

const InputPassInfo = () => {
  return (
    <div className={styles.homePageBackground}>
      <div>Board Pass Generator</div>
      <div className={styles.middleBanner}>
        <BoardingPassGeneratorBanner />
      </div>
    </div>
  );
};

export default InputPassInfo;
