import { useEffect } from "react";
import * as api from "../../api/flights";
import InputPassInfo from "../../components/InputPassInfo";

const Home = () => {
  useEffect(() => {
    const getFlights = async () => {
      const response = await api.getFlights();
    };
    getFlights();
  }, []);
  return (
    <div className="teste">
      <InputPassInfo />
    </div>
  );
};

export default Home;
