import React, {Component} from 'react'
import Note from './Note'
import '../App.css'
class NotesList extends Component {

    constructor() {
        super();
        this.state = {
            notes: [{title: 'I Scream For Ice Cream', body: ' Scoop snow cones mint mocha. Snow cones chocolate chip flavour froyo scoop toppings blueberry mocha. Sherbet cookies and cream, raspberry dessert flavour. Toppings nut cookies and cream, cake caramel. Mint frozen apple popsicle coffee cheesecake cheesecake.'  },
            {title: 'I Scream For Ice Cream', body: ' Scoop snow cones mint mocha. Snow cones chocolate chip flavour froyo scoop toppings blueberry mocha. Sherbet cookies and cream, raspberry dessert flavour. Toppings nut cookies and cream, cake caramel. Mint frozen apple popsicle coffee cheesecake cheesecake.'  }]
        }
    }

    render() {

        return (
            <div className='notesList'>
            <h2> Your Notes </h2>
            {this.state.notes.map( jot => <Note title={jot.title} key={jot.id} body={jot.body} jot={jot} />)}
            Yep it works
            </div>
        )
    }
}

export default NotesList