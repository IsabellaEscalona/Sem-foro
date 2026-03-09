import React, { useState } from "react";
import '../../styles/index.css'
import "bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const TrafficLight = () => {

    const [color, setColor] = useState("red")

    const trafficStyle = {
        fontSize: "100px"

    }

    return (

        <div className="d-flex-column d-flex flex-column justify-content-center align-items-center">
            <div className="palito bg-dark">

            </div>
            <div className="TrafficColor bg-dark d-flex flex-column justify-content-center align-items-center pe-2">
                <div onClick={() => setColor("red")} className={"lightRed " + (color === "red" ? "brillo" : "")}>
                    <div className={"red text-danger text-opacity-75 m-2 me-3"}>
                        <FontAwesomeIcon icon={faCircle} style={trafficStyle} />
                    </div>
                </div>
                <div onClick={() => setColor("yellow")} className={"lightYellow " + (color === "yellow" ? "brillo" : "")}>
                    <div className={"yellow text-warning text-opacity-75 m-2 me-3 "}>
                        <FontAwesomeIcon icon={faCircle} style={trafficStyle} />
                    </div>
                </div>
                <div onClick={() => setColor("green")} className={"lightGreen " + (color === "green" ? "brillo" : "")}>
                    <div className={"green text-success text-opacity-75 m-2 me-3"}>
                        <FontAwesomeIcon icon={faCircle} style={trafficStyle} />
                    </div>
                </div>

            </div>

        </div>

    )

};

export default TrafficLight;