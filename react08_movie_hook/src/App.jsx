import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./routers/About.jsx";
import Home from "./routers/Home.jsx";
import Navigation from "./components/Navigation.jsx";
import MovieView from "./components/MovieView.jsx";

function App() {
     return(
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/movieView' element={<MovieView/>} />
            </Routes>
        </BrowserRouter>
     )
}

export default App
