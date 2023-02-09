import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pass from "./pages/Pass/Pass";
import Home from "./pages/Home/Home";
import "./global.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pass" element={<Pass />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
