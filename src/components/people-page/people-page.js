import React, {Component} from "react";

import './people-page.css';
import ItemDetails from "../item-details";
import ItemList from "../item-list";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

export default class PeoplePage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedItem: 1
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render() {
        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.swapiService.getAllPeople} >
            {( item ) => (
                `${item.name} (${item.birthYear})`
            )}
            </ItemList>
        );
        const itemDetails = (
            <ItemDetails itemId={this.state.selectedItem} />
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={itemDetails} />
            </ErrorBoundry>
        );
    };
}