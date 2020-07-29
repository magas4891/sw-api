import React from "react";
import {withData} from "../hoc-helpers";
import ItemList from "../item-list";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const withChildrenFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped { ...props }>
                { fn }
            </Wrapped>
        );
    };
};



const PersonList = withData(
    withChildrenFunction(ItemList, ({ name }) => <span>{name}</span>),
    getAllPeople);
const PlanetList = withData(
    withChildrenFunction(ItemList, ({ name }) => <span>{name}</span>),
    getAllPlanets);
const StarshipList = withData(
    withChildrenFunction(ItemList, ({ name }) => <span>{name}</span>),
    getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};