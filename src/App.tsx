import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { dec, inc } from "./store/reducer";

function App() {
    const img: string[] = [
        "/img/1.jpg",
        "/img/2.jpg",
        "/img/3.jpg",
        "/img/4.jpg",
        "/img/5.jpg",
        "/img/6.jpg",
        "/img/7.jpg",
        "/img/8.jpg",
        "/img/9.jpg",
        "/img/10.jpg",
    ];

    const dispatch = useDispatch();
    const data = useSelector((state: any) => state);
    console.log(data);

    return (
        <div className="App">
            <h2>Slider: </h2>
            <img src={img[data]} alt="" width={1050} height={550}/>
            <hr />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={35} height={35} onClick={()=>{dispatch(dec())}}>
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={35} height={35} onClick={()=>{dispatch(inc())}}>
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
        </div>
    );
}

export default App;
