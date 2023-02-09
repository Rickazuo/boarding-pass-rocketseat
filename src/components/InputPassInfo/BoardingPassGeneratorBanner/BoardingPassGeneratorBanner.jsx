import { useState } from "react";
import DropDownButton from "../Buttons/DropDownButton";

import styles from "./styles.module.css";

const defaultFlightInfo = {
  destination: "",
  departure: "",
  date: "",
  firstName: "",
  lastName: "",
};

const departureOptions = [];
const destinationOptions = [];

const BoardingPassGeneratorBanner = () => {
  const [flightInfo, setFlightInfo] = useState(defaultFlightInfo);

  const onChange = (e, name) => {
    setFlightInfo((prev) => ({ prev, [name]: e.target.value }));
  };

  return (
    <div className={styles.buttonBanner}>
      <div className={styles.flightInfo}>
        <DropDownButton
          value={flightInfo.destination}
          onChange={(e) => onChange(e, "departure")}
          options={departureOptions}
        />
        <DropDownButton
          value={flightInfo.destination}
          onChange={(e) => onChange(e, "destination")}
          options={destinationOptions}
        />
        <DropDownButton
          value={flightInfo.destination}
          onChange={(e) => onChange(e, "date")}
          options={destinationOptions}
        />
        <button>Assento</button>
      </div>
      <div className={styles.passengerInfo}>
        <input placeholder="Nome" />
        <input placeholder="Sobrenome" />
      </div>
      <div className={styles.buttonConfirmation}>
        <button>Confirmar</button>
      </div>
    </div>
  );
};

export default BoardingPassGeneratorBanner;
