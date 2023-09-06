import { useParams } from "react-router-dom";
import React from "react";

const Number = () => {

    const { urlVar } = useParams();


    return (
        <div style={{ width: "50%", textAlign: "center", margin: "0 auto" }}>
            <h1>The {isNaN(urlVar) ? " word " : " number "} is: {urlVar}</h1>

        </div>
    );
};

export default Number;