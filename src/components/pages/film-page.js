import React, {Component} from "react";
import Row from "../row";
import {FilmList, FilmDetails} from "../sw-components";

export default class FilmPage extends Component {
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
                left={<FilmList onItemSelected={this.onItemSelected} />}
                right={<FilmDetails itemId={selectedItem} /> } />
        );
    }
}