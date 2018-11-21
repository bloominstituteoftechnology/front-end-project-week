import React from 'react';
import { connect } from 'react-redux';
import { filterText, sortBy } from '../actions/filters';

class NoteFilter extends React.Component {
    constructor(props) {
        super(props);

    }

    render(){
        return (
            <div style={{ marginBottom: 15 }}>
                <input       //search functionality
                    type="text"
                    placeholder="search"
                    value={this.props.filters.text}     //mapStateToProps passing filters? (link back to store?)
                    onChange={e => {
                        this.props.dispatch(filterText(e.target.value));  //dispatch to actions/filters
                    }}
                />
                sorted By:
                <select 
                    value={this.props.filters.sortBy}      //mapStateToProps passing filters? (link back to store?)
                    onChange={e => {
                        this.props.dispatch(sortBy(e.target.value));   //this only takes in user selection
                                                                        //values (title, published) below need to be linked to something, a function?
                                                                        //i would do a-z, z-a, id
                    }}
                >
                    <option value="none">---</option>    
                    <option value="title">Title</option>
                    <option value="published">Published</option>
                </select>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        filters: state.filters          //coming in from reducers
    };
};

export default connect(mapStateToProps)(NoteFilter)