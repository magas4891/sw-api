import React, {Component} from "react";

export default class TestPage extends Component {

    state = {
        name: 'Test',
        homeworld: ''
    }

    componentDidMount() {
        const url = 'https://swapi.dev/api/planets/1/';
        const data = this.getHomeworld(url);
        data.then((res) => {
            console.log(res);
            this.setState({
                homeworld: res.name
            });
        });
    }

    getHomeworld = (url) => {
        return fetch(url)
            .then(response => response.json());
    }

    render() {
        const { name, homeworld } = this.state;
        return(
            <>
                <h3>{ name }</h3>
                <h3>{ homeworld }</h3>
            </>
        );
    };
}

