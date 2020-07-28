import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import PeoplePage from "../people-page";

import './app.css';
import SwapiService from "../../services/swapi-service";

export default class App extends Component {

    render () {
        return (
            <div>
                <Header />
                <RandomPlanet />
                <PeoplePage />
            </div>
        );
    };
};
