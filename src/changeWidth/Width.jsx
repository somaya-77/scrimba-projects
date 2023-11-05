import { useEffect, useState } from "react";
import './style.css'

export default function Width() {
    const [show, setShow] = useState(true);
    return (
        <div className="page">
            <div className="container">
                <button onClick={() => setShow(!show)}>
                    Toggle WindowTracker
                </button>
                {show && <WindowTracker />}
            </div>
        </div>
    )
}


function WindowTracker() {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        function watchWidth() {
            console.log("sitting up...")
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWidth)

        return function () {
            console.log("clearing up...")
            window.removeEventListener("resize", watchWidth)
        }
        //    setWidth(window.innerWidth)

    }, [])
    return (
        <h1>Window width: {width}</h1>
    )
}
