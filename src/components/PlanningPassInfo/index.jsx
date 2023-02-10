import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Boarding from "./boarding/boarding";
import Flight from "./flight/flight";
import Passenger from "./passenger/passenger";

import styles from "./styles.module.css";

const PlanningPassInfo = () => {
    const navigate = useNavigate();
    const [ticket, setTicket] = useState();

    const getDateFormatted = (date) => {
        const formatDate = new Date(date).toLocaleString();
        const breakDate = formatDate?.split(" ");
        return { date: breakDate[0], time: breakDate[1].substring(0, 5) };
    };

    useEffect(() => {
        const flight = localStorage.getItem("flight");
        setTicket(JSON.parse(flight));
        if (!flight) navigate("/");
    }, []);
    const formattedDate = ticket?.date && getDateFormatted(ticket.date);

    return (
        ticket && (
            <div className={styles.background}>
                <button
                    className={styles.clearButton}
                    onClick={() => {
                        localStorage.removeItem("flight");
                        navigate("/");
                    }}
                >
                    Return
                </button>
                <div className={styles.boardingPass}>
                    <div className={styles.titleFlight}>Cartão de embarque</div>
                    <div className={styles.ticket}>
                        <Flight
                            date={formattedDate?.date}
                            time={formattedDate?.time}
                            departure={ticket?.departure}
                            destination={ticket?.destination}
                        />
                        <div className={styles.divider}></div>
                        <Passenger
                            name={`${ticket?.firstName} ${ticket?.lastName}`}
                        />
                        <div className={styles.divider}></div>
                        <Boarding time={formattedDate?.time} />
                    </div>
                    <div className={styles.footerBoardingPass}>
                        Qualquer problema procure o balcão de atendimento da sua
                        companhia aérea
                    </div>
                </div>
            </div>
        )
    );
};

export default PlanningPassInfo;
