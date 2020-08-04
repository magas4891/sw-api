import React from "react";
import {Link} from "react-router-dom";
import { PeoplePreview, PlanetsPreview, StarshipsPreview } from "../previews";

const MainPage = () => {
    return(
        <div>
            <ul className="d-flex">
                <li className="list-group-item">
                    <Link to="/people/" className="d-flex flex-column text-center">
                        <PeoplePreview />
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link to="/planets/" className="d-flex flex-column text-center">
                        <PlanetsPreview />
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link to="/starships/" className="d-flex flex-column text-center">
                        <StarshipsPreview />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default MainPage;