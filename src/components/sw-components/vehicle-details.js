import React from "react";
import ItemDetails, { Record }  from "../item-details";
import withSwapiService from "../hoc-helpers/with-swapiservice";

const VehicleDetails = (props) => {
    return(
        <ItemDetails { ...props } >
            <Record field="name" label="Name" />
            <Record field="model" label="Model" />
            <Record field="manufacturer" label="Manufacturer" />
            <Record field="costInCredits" label="Cost In Credits" />
            <Record field="length" label="Length" />
            <Record field="vehicleClass" label="Vehicle Class" />
            <Record field="maxAtmospheringSpeed" label="Maximum Atmosphering Speed" />
            <Record field="crew" label="Crew" />
            <Record field="passengers" label="Passengers" />
            <Record field="cargoCapacity" label="Cargo Capacity" />
            <Record field="consumables" label="Consumables" />
            <Record field="pilots" label="Pilots" />
            <Record field="films" label="Films" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getVehicle,
        getImageUrl: swapiService.getVehicleImage
    }
};

export default withSwapiService(mapMethodsToProps)(VehicleDetails);