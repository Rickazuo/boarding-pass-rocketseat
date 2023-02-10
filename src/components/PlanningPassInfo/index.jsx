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
    const breakTime = breakDate[1]?.split(":");
    const totalMinutes =
      parseInt(breakTime[0]) * 60 + parseInt(breakTime[1]) + 20;

    const newHours = Math.floor(totalMinutes / 60);
    const newMinutes = totalMinutes % 60;
    const closeGate = `${newHours < 10 ? "0" : ""}${newHours}:${
      newMinutes < 10 ? "0" : ""
    }${newMinutes}`;
    return {
      date: breakDate[0].replace(",", ""),
      time: `${breakTime[0]}:${breakTime[1]}`,
      closeGate,
    };
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
              seat={ticket?.seat}
            />
            <div className={styles.divider}></div>
            <Boarding
              time={formattedDate?.time}
              closeGateTime={formattedDate?.closeGate}
            />
          </div>
          <div className={styles.footerBoardingPass}>
            Qualquer problema procure o balcão de atendimento da sua companhia
            aérea
          </div>
        </div>
      </div>
    )
  );
};

export default PlanningPassInfo;
