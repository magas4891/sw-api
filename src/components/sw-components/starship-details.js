import React from "react";
import ItemDetails, { Record }  from "../item-details";
import withSwapiService from "../hoc-helpers/with-swapiservice";

const StarshipDetails = (props) => {
    return(
        <ItemDetails { ...props } >
            <Record field="model" label="Model" />
            <Record field="manufacturer" label="Manufacturer" />
            <Record field="costInCredits" label="Cost In Credits" />
            <Record field="length" label="Length" />
            <Record field="maxAtmospheringSpeed" label="Maximum Atmosphering Speed" />
            <Record field="crew" label="Crew" />
            <Record field="passengers" label="Passengers" />
            <Record field="cargoCapacity" label="Cargo Capacity" />
            <Record field="consumables" label="Consumables" />
            <Record field="hyperdriveRating" label="Hyperdrive Rating" />
            <Record field="mgtl" label="MGLT" />
            <Record field="starshipClass" label="Starship Class" />
            <Record field="pilots" label="Pilots" />
            <Record field="films" label="Films" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);