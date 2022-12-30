import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/404";
import Home from "./pages/home";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<Error />} />
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}
