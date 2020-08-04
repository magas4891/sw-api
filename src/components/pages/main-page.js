import React from "react";
import {Link} from "react-router-dom";
import {
    PeoplePreview,
    PlanetsPreview,
    StarshipsPreview,
    FilmsPreview,
    VehiclesPreview,
    SpeciesPreview } from "../previews";

const MainPage = () => {
    return(
        <div className="container">
            <div >
                <ul className="row">
                    <li className="col-sm-4">
                        <Link to="/people/" className="d-flex flex-column text-center">
                            <PeoplePreview />
                        </Link>
                    </li>
                    <li className="col-sm-4">
                        <Link to="/planets/" className="d-flex flex-column text-center">
                            <PlanetsPreview />
                        </Link>
                    </li>
                    <li className="col-sm-4">
                        <Link to="/starships/" className="d-flex flex-column text-center">
                            <StarshipsPreview />
                        </Link>
                    </li>
                    <li className="col-sm-4">
                        <Link to="/films/" className="d-flex flex-column text-center">
                            <FilmsPreview />
                        </Link>
                    </li>
                    <li className="col-sm-4">
                        <Link to="/vehicles/" className="d-flex flex-column text-center">
                            <VehiclesPreview />
                        </Link>
                    </li>
                    <li className="col-sm-4">
                        <Link to="/species/" className="d-flex flex-column text-center">
                            <SpeciesPreview />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MainPage;