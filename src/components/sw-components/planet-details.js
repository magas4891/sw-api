import React from "react";
import ItemDetails, { Record }  from "../item-details";
import withSwapiService from "../hoc-helpers/with-swapiservice";

const PlanetDetails = (props) => {
    return(
        <ItemDetails { ...props } >
            <Record field="population" label="Population" />
            <Record field="diameter" label="Diameter" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="orbitalPeriod" label="Orbital Period" />
            <Record field="climate" label="Climate" />
            <Record field="gravity" label="Gravity" />
            <Record field="terrain" label="Terrain" />
            <Record field="surfaceWater" label="Surface Water" />
            {/*<Record field="residents" label="Residents" />*/}
            {/*<Record field="films" label="Films" />*/}
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);