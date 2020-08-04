import React from "react";
import ItemList from "../item-list";
import {
    withData,
    withSwapiService,
    withChildrenFunction,
    compose} from "../hoc-helpers";

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
const mapFilmMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllFilms
    }
};
const mapVehicleMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllVehicles
    }
};
const mapSpecieMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllSpecies
    }
};

const PersonList = compose(
                    withSwapiService(mapPersonMethodsToProps),
                    withData,
                    withChildrenFunction(renderName)
                  )(ItemList);
const PlanetList = compose(
                    withSwapiService(mapPlanetMethodsToProps),
                    withData,
                    withChildrenFunction(renderName)
                  )(ItemList);
const StarshipList = compose(
                        withSwapiService(mapStarshipMethodsToProps),
                        withData,
                        withChildrenFunction(renderName)
                      )(ItemList);
const FilmList = compose(
                        withSwapiService(mapFilmMethodsToProps),
                        withData,
                        withChildrenFunction(renderName)
                      )(ItemList);
const VehicleList = compose(
                        withSwapiService(mapVehicleMethodsToProps),
                        withData,
                        withChildrenFunction(renderName)
                      )(ItemList);
const SpecieList = compose(
                        withSwapiService(mapSpecieMethodsToProps),
                        withData,
                        withChildrenFunction(renderName)
                      )(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList,
    FilmList,
    VehicleList,
    SpecieList
};