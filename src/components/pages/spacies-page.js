import React, {Component} from "react";
import Row from "../row";
import { SpecieList, SpecieDetails } from "../sw-components";

export default class SpeciesPage extends Component {
    state = {
        selectedItem: null
    };
    onItemSelected = ( selectedItem ) => {
        this.setState({selectedItem});
    };

    render() {
        const { selectedItem } = this.state;

        return (
            <Row
                left={<SpecieList onItemSelected={this.onItemSelected} />}
                right={<SpecieDetails itemId={selectedItem} /> } />
        );
    }
}