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
    LoginPage,
    SecretPage } from '../pages';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './app.css';
import StarshipDetails from "../sw-components/starship-details";

export default class App extends Component {

    state = {
        isLoggedIn: true
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
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
                            <Route path="/"
                                   render={() => <h2>Welcome to StarWars DB</h2>}
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
                            <Route
                                path="/login"
                                render={() => (
                                    <LoginPage isLoggedIn={this.state.isLoggedIn}
                                               onClick={this.onLogin} />
                                    )} />
                            <Route
                                path="/secret"
                                render={() => (
                                    <SecretPage isLoggedIn={false} />
                                )} />
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}
