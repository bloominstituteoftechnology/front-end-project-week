// import React, { Component } from 'react';
// // import { Link } from 'react-router-dom';
// import './ListView.css';



// class ListView extends Component {
//     render() {
//         const notesCollection = [
//             <div className='note'>
//             <h4>TITLE</h4>
//             <hr></hr>
//             <p> Hexagon seitan before they sold out, twee squid wolf umami knausgaard. Raclette XOXO crucifix knausgaard street art, farm-to-table master cleanse blog thundercats hella selvage migas enamel pin bespoke cray. Hot chicken flannel banjo tousled semiotics church-key YOLO, mixtape craft beer pop-up bitters waistcoat prism viral. Cred bushwick slow-carb, yuccie chillwave williamsburg umami thundercats chia normcore. Tbh pickled pok pok narwhal artisan. Tumeric pabst salvia, street art quinoa intelligentsia la croix swag cliche activated charcoal.
//         </p>
//         </div>,
//         <div className='note'>
//             <h4>TITLE</h4>
//             <hr></hr>
//             <p> Hexagon seitan before they sold out, twee squid wolf umami knausgaard. Raclette XOXO crucifix knausgaard street art, farm-to-table master cleanse blog thundercats hella selvage migas enamel pin bespoke cray. Hot chicken flannel banjo tousled semiotics church-key YOLO, mixtape craft beer pop-up bitters waistcoat prism viral. Cred bushwick slow-carb, yuccie chillwave williamsburg umami thundercats chia normcore. Tbh pickled pok pok narwhal artisan. Tumeric pabst salvia, street art quinoa intelligentsia la croix swag cliche activated charcoal.
//         </p>
//         </div>,
//         <div className='note'>
//             <h4>TITLE</h4>
//             <hr></hr>
//             <p> Hexagon seitan before they sold out, twee squid wolf umami knausgaard. Raclette XOXO crucifix knausgaard street art, farm-to-table master cleanse blog thundercats hella selvage migas enamel pin bespoke cray. Hot chicken flannel banjo tousled semiotics church-key YOLO, mixtape craft beer pop-up bitters waistcoat prism viral. Cred bushwick slow-carb, yuccie chillwave williamsburg umami thundercats chia normcore. Tbh pickled pok pok narwhal artisan. Tumeric pabst salvia, street art quinoa intelligentsia la croix swag cliche activated charcoal.
//         </p>
//         </div>,
//         <div className='note'>
//             <h4>TITLE</h4>
//             <hr></hr>
//             <p> Hexagon seitan before they sold out, twee squid wolf umami knausgaard. Raclette XOXO crucifix knausgaard street art, farm-to-table master cleanse blog thundercats hella selvage migas enamel pin bespoke cray. Hot chicken flannel banjo tousled semiotics church-key YOLO, mixtape craft beer pop-up bitters waistcoat prism viral. Cred bushwick slow-carb, yuccie chillwave williamsburg umami thundercats chia normcore. Tbh pickled pok pok narwhal artisan. Tumeric pabst salvia, street art quinoa intelligentsia la croix swag cliche activated charcoal.
//         </p>
//         </div>,
//         <div className='note'>
//             <h4>TITLE</h4>
//             <hr></hr>
//             <p> Hexagon seitan before they sold out, twee squid wolf umami knausgaard. Raclette XOXO crucifix knausgaard street art, farm-to-table master cleanse blog thundercats hella selvage migas enamel pin bespoke cray. Hot chicken flannel banjo tousled semiotics church-key YOLO, mixtape craft beer pop-up bitters waistcoat prism viral. Cred bushwick slow-carb, yuccie chillwave williamsburg umami thundercats chia normcore. Tbh pickled pok pok narwhal artisan. Tumeric pabst salvia, street art quinoa intelligentsia la croix swag cliche activated charcoal.
//         </p>
//         </div>,
//         <div className='note'>
//             <h4>TITLE</h4>
//             <hr></hr>
//             <p> Hexagon seitan before they sold out, twee squid wolf umami knausgaard. Raclette XOXO crucifix knausgaard street art, farm-to-table master cleanse blog thundercats hella selvage migas enamel pin bespoke cray. Hot chicken flannel banjo tousled semiotics church-key YOLO, mixtape craft beer pop-up bitters waistcoat prism viral. Cred bushwick slow-carb, yuccie chillwave williamsburg umami thundercats chia normcore. Tbh pickled pok pok narwhal artisan. Tumeric pabst salvia, street art quinoa intelligentsia la croix swag cliche activated charcoal.
//         </p>
//         </div>,
//         <div className='note'>
//             <h4>TITLE</h4>
//             <hr></hr>
//             <p> Hexagon seitan before they sold out, twee squid wolf umami knausgaard. Raclette XOXO crucifix knausgaard street art, farm-to-table master cleanse blog thundercats hella selvage migas enamel pin bespoke cray. Hot chicken flannel banjo tousled semiotics church-key YOLO, mixtape craft beer pop-up bitters waistcoat prism viral. Cred bushwick slow-carb, yuccie chillwave williamsburg umami thundercats chia normcore. Tbh pickled pok pok narwhal artisan. Tumeric pabst salvia, street art quinoa intelligentsia la croix swag cliche activated charcoal.
//         </p>
//         </div>,
//         <div className='note'>
//             <h4>TITLE</h4>
//             <hr></hr>
//             <p> Hexagon seitan before they sold out, twee squid wolf umami knausgaard. Raclette XOXO crucifix knausgaard street art, farm-to-table master cleanse blog thundercats hella selvage migas enamel pin bespoke cray. Hot chicken flannel banjo tousled semiotics church-key YOLO, mixtape craft beer pop-up bitters waistcoat prism viral. Cred bushwick slow-carb, yuccie chillwave williamsburg umami thundercats chia normcore. Tbh pickled pok pok narwhal artisan. Tumeric pabst salvia, street art quinoa intelligentsia la croix swag cliche activated charcoal.
//         </p>
//         </div>,
//         ]

//         return (
//             <div className='notesList_container'>
//                 <div>
//                     <h3>USER NOTES</h3>
//                 </div>
//                 <div className= 'notesList'>
//                    { notesCollection }
//                 </div>
//                 </div>
//         )
//     }
// }

// export default ListView; 

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteNote, editNote, createNote } from '../actions';
import './ListView.css';

const mapStateToProps = (state) => {
    return {
        notesArray: state
    }
}

class ListView extends Component {
    constructor() {
        super()
        this.state = {
            notesArray: this.state
        }
    }

    componentWillMount() {
        let reversed = Array.from(this.props.notesArray).reverse();
        this.setState({ notesArray: reversed });
    }

    generateNotes = (what, where) => {
        return (  
            <Link to={`/note/${what._id}`} className='unstiledLink' key={what._id}>  
            <div className='note'>
                <div>
                    <h4>{what.title}</h4>
                    <hr></hr>
                    <p>{what.body}</p>
                </div>
                </div>
            </Link>    
        )
    }

    render() {
        console.log('Props inside NotesList:',this.props)
        return (
            <div className='notesList_container'>
                <div><h3 className='content_header'>Your Notes:</h3></div>
                <div className='notesList'>
                    {this.state.notesArray.map(this.generateNotes)}
                </div>
            </div>
        );
    }
}
      

     
export default connect(mapStateToProps, { deleteNote, editNote, createNote })(ListView);