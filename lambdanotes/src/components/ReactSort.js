import React from 'react'

import { connect } from 'react-redux'
import { getNotes } from '../actions/noteAction'

import '../styles/ReactSort.css'   //add X to className, else entangle with App.css



class ReactSort extends React.Component {
    constructor(){
        super();
        this.state = {
            notes: [],
            sortAZ: false,
            sortUN: false,
            sortZA: false,
            sortID: false,
        }
    }

    componentDidMount(){
        this.props.getNotes()
    }

    //A-Z 
    sortObjProperty = (list, key) => {
        const compare = (a, b) => {
            a = a[key];
            b = b[key];
            const type = (typeof(a) === 'string' || 
                        typeof(b) === 'string') ? 'string' : 'number';
            let result;
            if (type === 'string') result = a.localeCompare(b);    //sort A-Z
            else result = a - b;                                   //sort A-Z
            return result;
        }
        return list.sort(compare);
    }

    //Z-A or ID
    sortObjProperty2 = (list, key) => {
        const compare = (a, b) => {
            a = a[key];
            b = b[key];
            const type = (typeof(a) === 'string' || 
                        typeof(b) === 'string') ? 'string' : 'number';
            let result;
            if (type === 'string') result = b.localeCompare(a);   //reverses the order Z-A
            else result = b - a;                                  //reverses the order Z-A
            return result;
        }
        return list.sort(compare);
    }

    //NEED separate sortClick for each "sort" variation
    sortClick = () => {
        this.setState(prevState => ({
            sortAZ: !prevState.sortAZ, sortUN: false, sortZA: false, sortID: false
        }));
    }

    sortClick2 = () => {
        this.setState(prevState => ({
            sortUN: !prevState.sortUN, sortAZ: false, sortZA: false, sortID: false
        }))
    }

    sortClick3 = () => {
        this.setState(prevState => ({
            sortZA: !prevState.sortZA, sortUN: false, sortAZ: false, sortID: false
        }))
    }

    sortClick4 = () => {
        this.setState(prevState => ({
            sortID: !prevState.sortID, sortUN: false, sortZA: false, sortAZ: false
        }))
    }

    render(){
        const emptyArr = [];

        //A-Z or Z-A or ID
        {this.props.notes.map(note => {
            emptyArr.push(note)
        })}

        return (
            <div>
                <div className="dropdownX" style={{float: "right"}}>
                    <button className="dropbtnX">Dropdown</button>
                    <div className="dropdown-contentX">
                        <div onClick={this.sortClick} style={{cursor: "pointer"}}><h2>A-Z</h2></div>
                        <div onClick={this.sortClick2} style={{cursor: "pointer"}}><h2>Unsorted</h2></div>
                        <div onClick={this.sortClick3} style={{cursor: "pointer"}}><h2>Z-A</h2></div>
                        <div onClick={this.sortClick4} style={{cursor: "pointer"}}><h2>ID</h2></div>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>



                <div>
                    ReactSort Testing: A-Z
                    <div onClick={this.sortClick}>
                        <h1>{this.state.sortAZ ? 'unsort' : 'a-z'}</h1>
                        {this.state.sortAZ && (
                            <div>
                                {this.sortObjProperty(emptyArr, 'title').map(obj => {
                                    return (
                                        <div className="notebox" key={obj._id}>
                                            Title: <h2>{obj.title.toUpperCase()}</h2>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    ReactSort Testing: UNSORT
                    <div onClick={this.sortClick2}>
                        <h1>{this.state.sortUN ? 'default' : 'sortUN'}</h1>
                        {this.state.sortUN && (
                            <div>
                                {this.props.notes.map(note => {
                                    return (
                                        <div className="notebox" key={note._id}>
                                            Title: <h2>{note.title.toUpperCase()}</h2>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div> 

                <div>
                    ReactSort Testing: Z-A
                    <div onClick={this.sortClick3}>
                        <h1>{this.state.sortZA ? 'unsort' : 'z-a'}</h1>
                        {this.state.sortZA && (
                            <div>
                                {this.sortObjProperty2(emptyArr, 'title').map(obj => {
                                    return (
                                        <div className="notebox" key={obj._id}>
                                            Title: <h2>{obj.title.toUpperCase()}</h2>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    ReactSort Testing: by ID
                    <div onClick={this.sortClick4}>
                        <h1>{this.state.sortID ? 'unsort' : 'ID'}</h1>
                        {this.state.sortID && (
                            <div>
                                {this.sortObjProperty2(emptyArr, '_id').map(obj => {   //sortObjProperty2 same as Z-A
                                    return (
                                        <div className="notebox" key={obj._id}>
                                            Title: <h2>{obj.title.toUpperCase()}</h2>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>


            </div>
        )
    }
}




const mapStateToProps = state => {
    return {
        notes: state.notes,
        error: state.error,
        loading: state.loading,
    }
}

export default connect(mapStateToProps, { getNotes})(ReactSort)
//export default ReactSort


// {this.props.notes.map(note => {
//     return (
//         <div className="notebox" key={note._id}>
//             <h2>{note.title}</h2>
//         </div>
//     )
// })}


