
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Home from "./routers/Home.jsx";
import About from "./routers/About.jsx";

function App() {
    return (
        /* 링크 달때 사용 */
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
