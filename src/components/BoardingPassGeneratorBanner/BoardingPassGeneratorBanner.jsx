import { useState } from "react";

import DropDown from "../DropDown/DropDown";
import Input from "../Input/Input";

import styles from "./styles.module.css";

const defaultFlightInfo = {
    destination: "",
    departure: "",
    date: "",
    firstName: "",
    lastName: "",
};

const departureOptions = ["hey"];
const destinationOptions = ["hello"];

const BoardingPassGeneratorBanner = () => {
    const [flightInfo, setFlightInfo] = useState(defaultFlightInfo);

    const onChange = (e, name) => {
        setFlightInfo((prev) => ({ prev, [name]: e.target.value }));
    };

    return (
        <div className={styles.buttonBanner}>
            <div className={styles.flightInfo}>
                <DropDown
                    value={flightInfo.departure}
                    onChange={(e) => onChange(e, "departure")}
                    options={departureOptions}
                />
                <DropDown
                    value={flightInfo.destination}
                    onChange={(e) => onChange(e, "destination")}
                    options={destinationOptions}
                />
                <DropDown
                    value={flightInfo.destination}
                    onChange={(e) => onChange(e, "date")}
                    options={destinationOptions}
                />
                <button className={styles.smallBtn}>Assento</button>
            </div>
            <div className={styles.passengerInfo}>
                <Input
                    placeholder="Nome"
                    value={flightInfo.firstName}
                    onChange={(e) => onChange(e, "firstName")}
                />
                <Input placeholder="Sobrenome" />
            </div>
            <div className={styles.buttonConfirmation}>
                <button>Confirmar</button>
            </div>
        </div>
    );
};

export default BoardingPassGeneratorBanner;
