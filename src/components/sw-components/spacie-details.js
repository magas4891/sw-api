import React from "react";
import ItemDetails, { Record }  from "../item-details";
import withSwapiService from "../hoc-helpers/with-swapiservice";

const SpecieDetails = (props) => {
    return(
        <ItemDetails { ...props } >
            <Record field="name" label="Name" />
            <Record field="classification" label="Classification" />
            <Record field="designation" label="Designation" />
            <Record field="averageHeight" label="Average Height" />
            <Record field="skinColors" label="Skin Colors" />
            <Record field="hairColors" label="Hair Colors" />
            <Record field="eyeColors" label="Eye Colors" />
            <Record field="averageLifespan" label="Average Lifespan" />
            <Record field="homeworld" label="Homeworld" />
            <Record field="language" label="Language" />
            <Record field="people" label="People" />
            <Record field="films" label="Films" />
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
