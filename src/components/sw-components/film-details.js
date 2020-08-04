import React from "react";
import ItemDetails, { Record }  from "../item-details";
import withSwapiService from "../hoc-helpers/with-swapiservice";

const FilmDetails = (props) => {
    return(
        <ItemDetails { ...props } >
            <Record field="name" label="Title" />
            <Record field="director" label="Director" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getFilm,
        getImageUrl: swapiService.getFilmImage
    }
};

export default withSwapiService(mapMethodsToProps)(FilmDetails);