import { useParams } from "react-router-dom";
import React from "react";

const Colored = () => {

    const { urlVar, bgColor, color } = useParams();


    return (
        <div style={{ width: "50%", textAlign: "center", margin: "0 auto" }}>
            <h1 style={{ backgroundColor: bgColor, color: color }}>The {isNaN(urlVar) ? " word " : " number "} is: {urlVar}</h1>

        </div>
    );
};

export default Colored;