import React from "react";

const PlanetsPreview = () => {
    return(
        <React.Fragment>
            <img
                className="planet-image"
                src='/planet.jpg'
                alt='planet'/>
            <span>Planets</span>
        </React.Fragment>
    );
}

export default PlanetsPreview;