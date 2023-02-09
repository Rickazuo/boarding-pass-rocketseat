import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DropDown from "../DropDown/DropDown";
import Input from "../Input/Input";
// import Date from "../UiDatePicker/UiDatePicker";

import styles from "./styles.module.css";

const defaultFlightInfo = {
    destination: "",
    departure: "",
    date: "",
    firstName: "",
    lastName: "",
};

const BoardingPassGeneratorBanner = ({ airports }) => {
    const navigate = useNavigate();
    const [flightInfo, setFlightInfo] = useState(defaultFlightInfo);
    const onChange = (e, name) => {
        setFlightInfo((prev) => ({ ...prev, [name]: e.target.value }));
    };

    const submit = () => {
        const stringBegin = "Missing ";
        let stringError = stringBegin;
        Object.keys(flightInfo).forEach((item) => {
            if (!flightInfo[item]) {
                stringError = `${stringError}${item} | `;
            }
        });

        if (stringError !== stringBegin) alert(stringError);
        else navigate("/ticket");
    };

    return (
        <div className={styles.buttonBanner}>
            <div className={styles.flightInfo}>
                <DropDown
                    value={flightInfo.departure}
                    onChange={(e) => onChange(e, "departure")}
                    options={airports}
                />
                <DropDown
                    value={flightInfo.destination}
                    onChange={(e) => onChange(e, "destination")}
                    options={airports}
                />
                {/* <Date /> */}
                <button className={styles.smallBtn}>Assento</button>
            </div>
            <div className={styles.passengerInfo}>
                <Input
                    placeholder="Nome"
                    value={flightInfo.firstName}
                    onChange={(e) => onChange(e, "firstName")}
                />
                <Input
                    placeholder="Sobrenome"
                    value={flightInfo.lastName}
                    onChange={(e) => onChange(e, "lastName")}
                />
            </div>
            <div className={styles.buttonConfirmation}>
                <button type="submit" onClick={submit}>
                    Confirmar
                </button>
            </div>
        </div>
    );
};

export default BoardingPassGeneratorBanner;
