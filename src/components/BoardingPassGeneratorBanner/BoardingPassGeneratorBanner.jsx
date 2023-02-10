import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DropDown from "../DropDown/DropDown";
import Input from "../Input/Input";
import SeatsModal from "../SeatsModal/SeatsModal";

import styles from "./styles.module.css";

const BoardingPassGeneratorBanner = ({ airports }) => {
    const defaultFlightInfo = {
        destination: "",
        departure: "",
        date: "",
        firstName: "",
        lastName: "",
        seat: "",
    };
    const navigate = useNavigate();
    const [flightInfo, setFlightInfo] = useState(defaultFlightInfo);
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const onChange = (e, name) => {
        setFlightInfo((prev) => ({ ...prev, [name]: e.target.value }));
    };

    const submit = () => {
        const stringBegin = "Missing fields ";
        let stringError = stringBegin;

        Object.keys(flightInfo).forEach((item) => {
            if (!flightInfo[item]) {
                stringError = `${stringError}${item} | `;
            }
        });

        if (stringError !== stringBegin) alert(stringError);
        else {
            const fullDestination = airports.find(
                (info) => info.aeroporto === flightInfo.destination
            );

            const fullDeparture = airports.find(
                (info) => info.aeroporto === flightInfo.departure
            );

            localStorage.setItem(
                "flight",
                JSON.stringify({
                    ...flightInfo,
                    destination: fullDestination,
                    departure: fullDeparture,
                })
            );
            navigate("/pass");
        }
    };

    return (
        <>
            <div className={styles.buttonBanner}>
                <div className={styles.flightInfo}>
                    <DropDown
                        value={flightInfo.departure}
                        onChange={(e) => onChange(e, "departure")}
                        options={airports}
                        label="Embarque"
                    />
                    <DropDown
                        value={flightInfo.destination}
                        onChange={(e) => onChange(e, "destination")}
                        options={airports}
                        label="Destino"
                    />
                    <input
                        type="datetime-local"
                        className={styles.birthdaytime}
                        name="birthdaytime"
                        required
                        onChange={(e) => onChange(e, "date")}
                    />
                    <button className={styles.smallBtn} onClick={togglePopup}>
                        <span style={{ color: "#e3d7ee" }}>Assento </span>
                        <span style={{ color: "white" }}>
                            {flightInfo?.seat}
                        </span>
                    </button>
                </div>
                <div className={styles.passengerInfo}>
                    <Input
                        placeholder="Nome"
                        value={flightInfo.firstName}
                        onChange={(e) => onChange(e, "firstName")}
                        required
                    />
                    <Input
                        placeholder="Sobrenome"
                        value={flightInfo.lastName}
                        onChange={(e) => onChange(e, "lastName")}
                        required
                    />
                </div>
                <div className={styles.buttonConfirmation}>
                    <button type="submit" onClick={submit}>
                        Confirmar
                    </button>
                </div>
            </div>
            {isOpen && (
                <SeatsModal
                    setSeat={(value) => {
                        setFlightInfo((prev) => ({ ...prev, seat: value }));
                        togglePopup();
                    }}
                    onClose={togglePopup}
                />
            )}
        </>
    );
};

export default BoardingPassGeneratorBanner;
