import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import ListView from './ListView';


export default class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ListCard: []
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:3000/api/ListCard')
            .then(response => {
                this.setState(() => ({ text: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }

    render() {
        return (
            <div className="cardflow">
                <div className="cardrow">
                    <div className="text">
                    {this.state.ListView.map(List => (
                            <ListDetails key={List.id} movie={List} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

function ListDetails({ List }) {
    const { id } = List;
    return (
        <NavLink to={`/ListCard/${id}`}>
            <ListCard List={List} />
        </NavLink>
    );
}