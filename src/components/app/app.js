import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails, {Record} from '../item-details/item-details';
import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi-service";
import Row from "../row";

import './app.css';


export default class App extends Component {

    swapiService = new SwapiService();

    render () {
        const { getPerson, getStarship,
                getPersonImage, getStarshipImage } = this.swapiService;
        const personDetails = (
            <ItemDetails
                itemId={4}
                getData={getPerson}
                getImage={getPersonImage} >

                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />

            </ItemDetails>
        );
        const starshipDetails = (
            <ItemDetails
                itemId={9}
                getData={getStarship}
                getImage={getStarshipImage} >

                <Record field="model" label="Model" />
                <Record field="manufacturer" label="Manufacturer" />

            </ItemDetails>
        );
        return (
            <div className="stardb-app">
                <Header />
                {/*<RandomPlanet />*/}
                {/*<PeoplePage />*/}
                {/*<Row left={personDetails} right={starshipDetails} />*/}
                <ItemList
                    getData={this.swapiService.getAllPeople}
                    onItemSelected={() => {}}>
                    { ({name}) => <span>{name}</span>}
                </ItemList>
            </div>
        );
    };
};
