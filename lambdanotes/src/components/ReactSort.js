import React from 'react'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { getNotes } from '../actions/noteAction'

import '../styles/ReactSort.css'   //add X to className, else entangle with App.css



class ReactSort extends React.Component {
    constructor(){
        super();
        this.state = {
            notes: [],
            // sortAZ: false,
            // sortUN: false,
            // sortZA: false,
            // sortID: false,
        }
    }

    
    componentDidMount(){
        this.props.getNotes()
    }

    componentDidUpdate(prevProps){
        if (!prevProps.notes.length && this.props.notes.length){
            this.setState({ notes: this.props.notes })
        }
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
        const notes = this.sortObjProperty(this.state.notes, 'title');
        this.setState({notes})
        // this.setState(prevState => ({
        //     sortAZ: !prevState.sortAZ, sortUN: false, sortZA: false, sortID: false
        // }));
    }

    sortClick2 = () => {
        this.setState(prevState => ({
            sortUN: !prevState.sortUN, sortAZ: false, sortZA: false, sortID: false
        }))
    }

    sortClick3 = () => {
        const notes = this.sortObjProperty2(this.state.notes, 'title');
        this.setState({notes})

        // this.setState(prevState => ({
        //     sortZA: !prevState.sortZA, sortUN: false, sortAZ: false, sortID: false
        // }))
    }

    sortClick4 = () => {
        const notes = this.sortObjProperty2(this.state.notes, 'id');
        this.setState({notes})

        // this.setState(prevState => ({
        //     sortID: !prevState.sortID, sortUN: false, sortZA: false, sortAZ: false
        // }))
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
                        <div onClick={this.sortClick2} style={{cursor: "pointer"}}><h2>Unsorted</h2></div>
                        <div onClick={this.sortClick} style={{cursor: "pointer"}}><h2>A-Z</h2></div>
                        <div onClick={this.sortClick3} style={{cursor: "pointer"}}><h2>Z-A</h2></div>
                        <div onClick={this.sortClick4} style={{cursor: "pointer"}}><h2>Most Recent</h2></div>
                    </div>
                </div>

                


                <div className="display-container">

                    <div>
                        <div onClick={this.sortClick2}>
                            <h2>{this.state.sortUN ? 'Hide' : 'Unsorted'}</h2>
                            {this.state.sortUN && (
                                <div>
                                    {this.state.notes.map(note => {
                                        return (
                                            <div className="notebox1" key={note.id}>
                                                <Link to={`/notes/${note.id}`}><h2>{note.title.toUpperCase()}</h2></Link>
                                                <p> <strong>Content:</strong> {note.textBody.slice(0, 100) + (note.textBody.length > 100 ? "..." : "")}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                    </div> 


                  {/*   <div>
                //         <div onClick={this.sortClick}>
                //             <h2>{this.state.sortAZ ? 'Hide' : 'A-Z'}</h2>
                //             {this.state.sortAZ && (        
                //                 <div>
                //                     {this.sortObjProperty(emptyArr, 'title').map(obj => {
                //                         return (
                //                             <div>
                //                                 <div className="notebox1" key={obj.id}>
                //                                     <Link to={`/notes/${obj.id}`}><h2>{obj.title.toUpperCase()}</h2></Link>
                //                                     <p> <strong>Content:</strong> {obj.textBody.slice(0, 100) + (obj.textBody.length > 100 ? "..." : "")}</p>
                //                                 </div>
                //                             </div>
                //                         )
                //                     })}
                //                 </div>
                //             )}
                //         </div>
                //     </div>


                //     <div>
                //         <div onClick={this.sortClick3}>
                //             <h2>{this.state.sortZA ? 'Hide' : 'Z-A'}</h2>
                //             {this.state.sortZA && (
                //                 <div>
                //                     {this.sortObjProperty2(emptyArr, 'title').map(obj => {
                //                         return (
                //                             <div className="notebox1" key={obj.id}>
                //                                 <Link to={`/notes/${obj.id}`}><h2>{obj.title.toUpperCase()}</h2></Link>
                //                                 <p> <strong>Content:</strong> {obj.textBody.slice(0, 100) + (obj.textBody.length > 100 ? "..." : "")}</p>
                //                             </div>
                //                         )
                //                     })}
                //                 </div>
                //             )}
                //         </div>
                //     </div>

                //     <div>
                //         <div onClick={this.sortClick4}>
                //             <h2>{this.state.sortID ? 'Hide' : 'Most Recent'}</h2>
                //             {this.state.sortID && (
                //                 <div>
                //                     {this.sortObjProperty2(emptyArr, 'id').map(obj => {   //sortObjProperty2 same as Z-A
                //                         return (
                //                             <div className="notebox1" key={obj.id}>
                //                                 <Link to={`/notes/${obj.id}`}><h2>{obj.title.toUpperCase()}</h2></Link>
                //                                 <p> <strong>Content:</strong> {obj.textBody.slice(0, 100) + (obj.textBody.length > 100 ? "..." : "")}</p>
                //                             </div>
                //                         )
                //                     })}
                //                 </div>
                //             )}
                //         </div>
                //     </div>      */}
                
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
//         <div className="notebox" key={note.id}>
//             <h2>{note.title}</h2>
//         </div>
//     )
// })}


