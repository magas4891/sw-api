import React from "react";
import Row from "../row";
import {PersonList} from "../sw-components";
import PersonDetails from "../sw-components/person-details";

const PeoplePage = ({ match, history}) => {

    const { id } = match.params;

    return (
        <Row
            left={<PersonList onItemSelected={ (id) => history.push(id)} />}
            right={<PersonDetails itemId={ id } /> } />
    );
}

export default PeoplePage;