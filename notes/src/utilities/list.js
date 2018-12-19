

//== List ======================================================================

//-- Dependencies --------------------------------
import React from 'react';
import Loading from './loading.js';
import './list.css';
import axios from 'axios';


/*== Component =================================================================

Props Reference:
    + listUrl: A URL from which the list can retrieve an array of objects.
    + itemComponent: A component to render for each item in the above array.

*/

export default class List extends React.Component {

    //-- Lifecycle -----------------------------------
    constructor() {
        super(...arguments);
        this.state = {
            items: []   ,
            ready: false,
        };
    }
    componentDidMount() {
        axios.get(this.props.listUrl)
        .then(response => {
            let data = response.data;
            this.setState({
                items: data,
                ready: true,
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    //-- Rendering -----------------------------------
    render() {
        let loadNotifier;
        let classText = 'list';
        if(!this.state.ready){
            loadNotifier = (<Loading />);
            classText += ' list_loading';
        }
        return (
            <div className={classText}>
                {loadNotifier || this.state.items.map(item => (
                    <this.props.itemComponent
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
        );
    }
}
