import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pass from "./pages/Pass/Pass";
import Home from "./pages/Home/Home";
import PageLayout from "./components/PageLayout/PageLayout";
import "./global.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PageLayout>
                            <Home />
                        </PageLayout>
                    }
                />
                <Route
                    path="/pass"
                    element={
                        <PageLayout>
                            <Pass />
                        </PageLayout>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
