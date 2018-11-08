import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './ListView.css';


// const ListView = props => {
//     return (
//         <div className= 'note-card-wrapper'>
//             {
//                 (props.notesData.map( note => 
//                     <div className= 'note-card'  >
//                         <Link to={`${note._id}`} onClick={() => props.getCurrentNoteByID(note._id)}><h1>{note.title} </h1></Link>
//                         <p>{note.textBody}</p>
//                     </div>))
//             }
//         </div>
//     )
// }

class ListView extends Component {
    render() {
        return (
            <div className='notesList_container'>
                <div>
                        <h3>USER NOTES</h3>
                </div>
                <div className= 'notesList'>
                    <div className='note'>
                        <h4>TITLE</h4>
                        <hr></hr>
                        <p> Hexagon seitan before they sold out, twee squid wolf umami knausgaard. Raclette XOXO crucifix knausgaard street art, farm-to-table master cleanse blog thundercats hella selvage migas enamel pin bespoke cray. Hot chicken flannel banjo tousled semiotics church-key YOLO, mixtape craft beer pop-up bitters waistcoat prism viral. Cred bushwick slow-carb, yuccie chillwave williamsburg umami thundercats chia normcore. Tbh pickled pok pok narwhal artisan. Tumeric pabst salvia, street art quinoa intelligentsia la croix swag cliche activated charcoal.
                    </p>
                    </div>
                    <div className='note'>
                        <h4>TITLE</h4>
                        <hr></hr>
                        <p> Hexagon seitan before they sold out, twee squid wolf umami knausgaard. Raclette XOXO crucifix knausgaard street art, farm-to-table master cleanse blog thundercats hella selvage migas enamel pin bespoke cray. Hot chicken flannel banjo tousled semiotics church-key YOLO, mixtape craft beer pop-up bitters waistcoat prism viral. Cred bushwick slow-carb, yuccie chillwave williamsburg umami thundercats chia normcore. Tbh pickled pok pok narwhal artisan. Tumeric pabst salvia, street art quinoa intelligentsia la croix swag cliche activated charcoal.
                    </p>
                    </div>
                    <div className='note'>
                        <h4>TITLE</h4>
                        <hr></hr>
                        <p> Hexagon seitan before they sold out, twee squid wolf umami knausgaard. Raclette XOXO crucifix knausgaard street art, farm-to-table master cleanse blog thundercats hella selvage migas enamel pin bespoke cray. Hot chicken flannel banjo tousled semiotics church-key YOLO, mixtape craft beer pop-up bitters waistcoat prism viral. Cred bushwick slow-carb, yuccie chillwave williamsburg umami thundercats chia normcore. Tbh pickled pok pok narwhal artisan. Tumeric pabst salvia, street art quinoa intelligentsia la croix swag cliche activated charcoal.
                    </p>
                    </div>
                    <div className='note'>
                        <h4>TITLE</h4>
                        <hr></hr>
                        <p> Hexagon seitan before they sold out, twee squid wolf umami knausgaard. Raclette XOXO crucifix knausgaard street art, farm-to-table master cleanse blog thundercats hella selvage migas enamel pin bespoke cray. Hot chicken flannel banjo tousled semiotics church-key YOLO, mixtape craft beer pop-up bitters waistcoat prism viral. Cred bushwick slow-carb, yuccie chillwave williamsburg umami thundercats chia normcore. Tbh pickled pok pok narwhal artisan. Tumeric pabst salvia, street art quinoa intelligentsia la croix swag cliche activated charcoal.
                    </p>
                    </div>
                    <div className='note'>
                        <h4>TITLE</h4>
                        <hr></hr>
                        <p> Hexagon seitan before they sold out, twee squid wolf umami knausgaard. Raclette XOXO crucifix knausgaard street art, farm-to-table master cleanse blog thundercats hella selvage migas enamel pin bespoke cray. Hot chicken flannel banjo tousled semiotics church-key YOLO, mixtape craft beer pop-up bitters waistcoat prism viral. Cred bushwick slow-carb, yuccie chillwave williamsburg umami thundercats chia normcore. Tbh pickled pok pok narwhal artisan. Tumeric pabst salvia, street art quinoa intelligentsia la croix swag cliche activated charcoal.
                    </p>
                    </div>
                    <div className='note'>
                        <h4>TITLE</h4>
                        <hr></hr>
                        <p> Hexagon seitan before they sold out, twee squid wolf umami knausgaard. Raclette XOXO crucifix knausgaard street art, farm-to-table master cleanse blog thundercats hella selvage migas enamel pin bespoke cray. Hot chicken flannel banjo tousled semiotics church-key YOLO, mixtape craft beer pop-up bitters waistcoat prism viral. Cred bushwick slow-carb, yuccie chillwave williamsburg umami thundercats chia normcore. Tbh pickled pok pok narwhal artisan. Tumeric pabst salvia, street art quinoa intelligentsia la croix swag cliche activated charcoal.
                    </p>
                    </div>
                    <div className='note'>
                        <h4>TITLE</h4>
                        <hr></hr>
                        <p> Hexagon seitan before they sold out, twee squid wolf umami knausgaard. Raclette XOXO crucifix knausgaard street art, farm-to-table master cleanse blog thundercats hella selvage migas enamel pin bespoke cray. Hot chicken flannel banjo tousled semiotics church-key YOLO, mixtape craft beer pop-up bitters waistcoat prism viral. Cred bushwick slow-carb, yuccie chillwave williamsburg umami thundercats chia normcore. Tbh pickled pok pok narwhal artisan. Tumeric pabst salvia, street art quinoa intelligentsia la croix swag cliche activated charcoal.
                    </p>
                    </div>
                    <div className='note'>
                        <h4>TITLE</h4>
                        <hr></hr>
                        <p> Hexagon seitan before they sold out, twee squid wolf umami knausgaard. Raclette XOXO crucifix knausgaard street art, farm-to-table master cleanse blog thundercats hella selvage migas enamel pin bespoke cray. Hot chicken flannel banjo tousled semiotics church-key YOLO, mixtape craft beer pop-up bitters waistcoat prism viral. Cred bushwick slow-carb, yuccie chillwave williamsburg umami thundercats chia normcore. Tbh pickled pok pok narwhal artisan. Tumeric pabst salvia, street art quinoa intelligentsia la croix swag cliche activated charcoal.
                    </p>
                    </div>
                    <div className='note'>
                        <h4>TITLE</h4>
                        <hr></hr>
                        <p> Hexagon seitan before they sold out, twee squid wolf umami knausgaard. Raclette XOXO crucifix knausgaard street art, farm-to-table master cleanse blog thundercats hella selvage migas enamel pin bespoke cray. Hot chicken flannel banjo tousled semiotics church-key YOLO, mixtape craft beer pop-up bitters waistcoat prism viral. Cred bushwick slow-carb, yuccie chillwave williamsburg umami thundercats chia normcore. Tbh pickled pok pok narwhal artisan. Tumeric pabst salvia, street art quinoa intelligentsia la croix swag cliche activated charcoal.
                    </p>
                    </div>
                </div>
                </div>
        )
    }
}

export default ListView; 
      

     
