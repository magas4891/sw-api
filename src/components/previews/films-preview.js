import React from "react";

const FilmsPreview = () => {
    return(
        <>
            <img
                className="film-image"
                src='/film.jpg'
                alt="films"
            />
            <span>Films</span>
        </>
    );
}

export default FilmsPreview;