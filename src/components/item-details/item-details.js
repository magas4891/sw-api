import React, { Component } from 'react';
import Spinner from "../spinner";

import './item-details.css';

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{ label }</span>
            <span>{ item[field] }</span>
        </li>
    );
}

export { Record };

export default class ItemDetails extends Component {

    state = {
        item: null,
        image: null
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    componentDidMount() {
        this.updateItem();
    }

    updateItem() {
        const { itemId, getData, getImage } = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImage(item)
                });
            });
    };

    render() {
        const { item, image } = this.state;
        if (!item) {
            return <Spinner />
        }
        const { name } = item;

        return (
            <div className="person-details card">
                <img className="person-image"
                     src={ image }
                     alt="character"/>

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item });
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    };
}
