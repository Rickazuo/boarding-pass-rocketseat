import { useEffect } from "react";
import * as api from "../../api/flights";

const Home = () => {
    useEffect(() => {
        const getFlights = async () => {
            debugger;
            const response = await api.getFlights();
            debugger;
        };
        getFlights();
    }, []);
    return <div>oooi</div>;
};

export default Home;
