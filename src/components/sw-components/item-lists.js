import React from "react";
import {withData, withSwapiService} from "../hoc-helpers";
import ItemList from "../item-list";

const withChildrenFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped { ...props }>
                { fn }
            </Wrapped>
        );
    };
};

const renderName = ({ name }) => <span>{ name }</span>;

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
};
const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
};
const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
};

const PersonList = withSwapiService(
                        withData(
                            withChildrenFunction(ItemList, renderName)),
                        mapPersonMethodsToProps);
const PlanetList = withSwapiService(
                        withData(
                            withChildrenFunction(ItemList, renderName)),
                        mapPlanetMethodsToProps);
const StarshipList = withSwapiService(
                        withData(
                            withChildrenFunction(ItemList, renderName)),
                        mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
};