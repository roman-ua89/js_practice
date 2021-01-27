import React from "react";
import preloader from "../../../assets/images/preloader.gif";

let Preloader = (props) => {
    return <div style={ {opacity: 0.3} }>
        <img src={preloader} />
    </div>
}

export default Preloader;

