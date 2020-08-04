import React from "react";
import ItemDetails, { Record }  from "../item-details";
import withSwapiService from "../hoc-helpers/with-swapiservice";

const SpecieDetails = (props) => {
    return(
        <ItemDetails { ...props } >
            <Record field="name" label="Name" />
            <Record field="classification" label="Classification" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getSpecie,
        getImageUrl: swapiService.getSpecieImage
    }
};

export default withSwapiService(mapMethodsToProps)(SpecieDetails);
