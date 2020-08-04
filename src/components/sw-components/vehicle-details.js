import React from "react";
import ItemDetails, { Record }  from "../item-details";
import withSwapiService from "../hoc-helpers/with-swapiservice";

const VehicleDetails = (props) => {
    return(
        <ItemDetails { ...props } >
            <Record field="name" label="Name" />
            <Record field="model" label="Model" />
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