import './App.css'
import Controller from "./Conponent/Controller.jsx";
import Viewer from "./Conponent/Viewer.jsx";
import {useEffect, useState} from "react";

function App() {
    const [count, setCount] = useState(0);

    const handleSetCount = (num) => {
        setCount(count + num);
    }
    const randomCount = () => {
        setCount(Math.floor(Math.random()*2000 -1000));
    }

    const [text, setText] = useState('');
    const handleChangeText = (e) => {
        setText(e.target.value);
    }

    //useEffect (콜백함수, 배열)
    useEffect(() => {
        console.log('update : ', text, count)
    }, [count, text]);


    return(
        <div>
            <h1>Simple Counter</h1>
            <section>
                <input value={text} onChange={handleChangeText}/>
            </section>
            <section>
                <Viewer count={count}/>
            </section>
            <section>
                <Controller handleSetCount={handleSetCount} randomCount={randomCount}/>
            </section>
        </div>
    )

}

export default App
