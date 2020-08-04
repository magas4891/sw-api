import React from "react";
import ItemDetails, { Record }  from "../item-details";
import withSwapiService from "../hoc-helpers/with-swapiservice";

const PersonDetails = (props) => {
    return(
        <ItemDetails { ...props } >
            <Record field="gender" label="Gender " />
            <Record field="eyeColor" label="Eye Color " />
            <Record field="birthYear" label="Birth Year" />
            <Record field="hairColor" label="Hair Color" />
            <Record field="height" label="Height" />
            <Record field="mass" label="Mass" />
            <Record field="skinColor" label="Skin Color" />
            <Record field="homeworld" label="Homeworld" />
            <Record field="films" label="Films" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);