import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import { SwapiServiceProvider} from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import {
    PeoplePage,
    PlanetsPage,
    StarshipsPage,
    MainPage,
    FilmPage
} from '../pages';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './app.css';
import StarshipDetails from "../sw-components/starship-details";
import VehiclesPage from "../pages/vehicles-page";
import SpeciesPage from "../pages/spacies-page";

export default class App extends Component {

    state = {
        isLoggedIn: false
    }

    onLogin = () => {
        this.setState((prev) => {
            return {isLoggedIn: !prev.isLoggedIn}
        });
    }

    swapiService = new SwapiService();

    render() {
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService} >
                    <Router>
                        <div className="stardb-app">
                            <Header />
                            <RandomPlanet />
                            <Switch>
                                <Route path="/"
                                       component={MainPage}
                                       exact />
                                <Route path="/people/:id?" component={PeoplePage} />
                                <Route path="/planets" component={PlanetsPage} />
                                <Route path="/starships"
                                       component={StarshipsPage}
                                       exact/>
                                <Route path="/starships/:id"
                                       render={({ match }) => {
                                           const { id } = match.params;
                                           return <StarshipDetails itemId={ id } />
                                       }}/>
                                <Route path="/films/:id?" component={FilmPage} />
                                <Route path="/vehicles/:id?" component={VehiclesPage} />
                                <Route path="/species/:id?" component={SpeciesPage} />
                                <Route render={() => <h2>Page not found</h2>} />
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}
