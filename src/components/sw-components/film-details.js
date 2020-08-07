import React from "react";
import ItemDetails, { Record }  from "../item-details";
import withSwapiService from "../hoc-helpers/with-swapiservice";

const FilmDetails = (props) => {
    return(
        <ItemDetails { ...props } >
            <Record field="name" label="Title" />
            <Record field="episodeId" label="Episode Id" />
            <Record field="openingCrawl" label="Opening Crawl" />
            <Record field="director" label="Director" />
            <Record field="producer" label="Producer" />
            <Record field="releaseDate" label="Release Date" />
            <Record field="characters" label="Characters" />
            <Record field="planets" label="Planets" />
            <Record field="starships" label="Starships" />
            <Record field="vehicles" label="Vehicles" />
            <Record field="species" label="Species" />
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