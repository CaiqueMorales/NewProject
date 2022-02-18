import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";

import './App.css';

export function App () {

    return(

        <Router>
        
            <NavBar />
            <Routes>

                <Route exact path="/" element={<Home />}>
                </Route>

            </Routes>
        
        </Router>

    )

}