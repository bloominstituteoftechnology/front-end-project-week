import React, { Component } from 'react';
import './index.css';
// import DeleteNote from '../DeleteNote/DeleteNote';
// import { Link } from 'react-router-dom';


class NoteView extends Component {



    render() {
        console.log("noteview:", this.props)
return (
    <div className='view_container'>
        Test   
    </div>
)
}
}



export default NoteView;










//redux 1/3
// import { connect } from 'react-redux';


//redux 2/3 for redux copy and paste the state
// const mapStateToProps = (state) => {
//     return {
//         notes: state
//     }
// }



// class NoteView extends Component {
// //     constructor(){
// //         super()
// //         this.state = {
// //             displayDelete: false,
// //             matched:[],
// //             notes: [
// //                 {
// //                     _id: '12345',
// //                     title: "Note Title",
// //                     textBody: "Every day is taco ipsum tuesday. Shrimp tacos are tasty tacos! Make it a double there pal. If you were a taco, would you eat yourself? TACOS!! Josh’s taco shack is the best taco shack. Um, Tabasco? No thanks, do you have any Cholula? Tacos al pastor made with adobada meat. Black or pinto beans? Um, Tabasco? No thanks, do you have any Cholula? TACOS!! I’ve been following that taco truck around all day. Carne asada on corn tortillas. How do you feel about hard shelled tacos?",
// //                 },
// //                 {
// //                     _id: '23456',
// //                     title: "Note Title",
// //                     textBody: "Carne asada on corn tortillas. I’d have to say, those tacos are on fleek. Fish tacos: lettuce or cabbage, pico de gallo, avocado and a sour cream or citrus/mayonnaise sauce, all placed on top of a corn or flour tortilla. Side of rice and beans, please. Tacos Al pastor/De Adobada are made of thin pork steaks seasoned with adobo seasoning, then skewered and overlapped on one another on a vertical rotisserie cooked and flame-broiled as it spins. Um, Tabasco? No thanks, do you have any Cholula? These tacos are lit 🔥. Tacos, tacos, tacos. CARNE ASADA!! How do you feel about hard shelled tacos?",
// //                 },
// //                 {
// //                     _id: '34567',
// //                     title: "Note Title",
// //                     textBody: "Tacos Al pastor/De Adobada are made of thin pork steaks seasoned with adobo seasoning, then skewered and overlapped on one another on a vertical rotisserie cooked and flame-broiled as it spins. Side of rice and beans, please. Burritos are very tasty. Tacos al pastor made with adobada meat. Fish tacos with cabbage slaw and a side of chips and guac. Pico de gallo, on the side please. Give me all the tacos, immediately. Tacos al pastor made with adobada meat. Give me all the tacos, immediately.",
// //                 },
// //                 {
// //                     _id: '45678',
// //                     title: "Note Title",
// //                     textBody: "Every day is taco ipsum tuesday. Shrimp tacos are tasty tacos! Make it a double there pal. If you were a taco, would you eat yourself? TACOS!! Josh’s taco shack is the best taco shack. Um, Tabasco? No thanks, do you have any Cholula? Tacos al pastor made with adobada meat. Black or pinto beans? Um, Tabasco? No thanks, do you have any Cholula? TACOS!! I’ve been following that taco truck around all day. Carne asada on corn tortillas. How do you feel about hard shelled tacos?",
// //                 },
// //                 {
// //                     _id: '56789',
// //                     title: "Note Title",
// //                     textBody: "Carne asada on corn tortillas. I’d have to say, those tacos are on fleek. Fish tacos: lettuce or cabbage, pico de gallo, avocado and a sour cream or citrus/mayonnaise sauce, all placed on top of a corn or flour tortilla. Side of rice and beans, please. Tacos Al pastor/De Adobada are made of thin pork steaks seasoned with adobo seasoning, then skewered and overlapped on one another on a vertical rotisserie cooked and flame-broiled as it spins. Um, Tabasco? No thanks, do you have any Cholula? These tacos are lit 🔥. Tacos, tacos, tacos. CARNE ASADA!! How do you feel about hard shelled tacos?",
// //                 },
// //                 {
// //                     _id: '67890',
// //                     title: "Note Title",
// //                     textBody: "Tacos Al pastor/De Adobada are made of thin pork steaks seasoned with adobo seasoning, then skewered and overlapped on one another on a vertical rotisserie cooked and flame-broiled as it spins. Side of rice and beans, please. Burritos are very tasty. Tacos al pastor made with adobada meat. Fish tacos with cabbage slaw and a side of chips and guac. Pico de gallo, on the side please. Give me all the tacos, immediately. Tacos al pastor made with adobada meat. Give me all the tacos, immediately.",
// //                 },
// //                 {
// //                     _id: '78901',
// //                     title: "Note Title",
// //                     textBody: "Every day is taco ipsum tuesday. Shrimp tacos are tasty tacos! Make it a double there pal. If you were a taco, would you eat yourself? TACOS!! Josh’s taco shack is the best taco shack. Um, Tabasco? No thanks, do you have any Cholula? Tacos al pastor made with adobada meat. Black or pinto beans? Um, Tabasco? No thanks, do you have any Cholula? TACOS!! I’ve been following that taco truck around all day. Carne asada on corn tortillas. How do you feel about hard shelled tacos?",
// //                 },
// //                 {
// //                     _id: '89012',
// //                     title: "Note Name",
// //                     textBody: "Carne asada on corn tortillas. I’d have to say, those tacos are on fleek. Fish tacos: lettuce or cabbage, pico de gallo, avocado and a sour cream or citrus/mayonnaise sauce, all placed on top of a corn or flour tortilla. Side of rice and beans, please. Tacos Al pastor/De Adobada are made of thin pork steaks seasoned with adobo seasoning, then skewered and overlapped on one another on a vertical rotisserie cooked and flame-broiled as it spins. Um, Tabasco? No thanks, do you have any Cholula? These tacos are lit 🔥. Tacos, tacos, tacos. CARNE ASADA!! How do you feel about hard shelled tacos?",
// //                 },
// //                 {
// //                     _id: '90123',
// //                     title: "Note Title",
// //                     textBody: "Tacos Al pastor/De Adobada are made of thin pork steaks seasoned with adobo seasoning, then skewered and overlapped on one another on a vertical rotisserie cooked and flame-broiled as it spins. Side of rice and beans, please. Burritos are very tasty. Tacos al pastor made with adobada meat. Fish tacos with cabbage slaw and a side of chips and guac. Pico de gallo, on the side please. Give me all the tacos, immediately. Tacos al pastor made with adobada meat. Give me all the tacos, immediately.",
// //                 }
// //         ],
// //         }
// //     }

// // // componentWillMount(){
// // //     console.log('prop notes', this.props)
// // //     let routeId = this.props.match.params.id;
// // //     let matched = this.props.notes.filter((item)=>item._id === routeId)
// // //     this.setState({matched})
// // // }


// //     showModal = (event) => {
// //         event.preventDefault();
// //         this.setState({displayDelete: !this.state.displayDelete})
// //     }


//     render() {
//                     console.log("noteview:", this.props)
//         return (
//             <div className='view_container'>
//             <div className="view_note_containter">
//                 <div className="links_container">
//                     <Link to={`/edit/${this.props.match.params.id}`} className="view_links">edit</Link>
//                     <br />
//                     <a href="" onClick={this.showModal} className="view_links">delete</a>
//                     <br /><br />
//                 </div>
//                     <div className="view_title">
                
//                     {/* {this.state.matched[0].title} */}
//                     {/* {this.state.matched[0].title}  */}
//                     </div><br />
                    
//                     {/* <p className="view_content"> {this.state.matched[0].textBody}</p> */}
            
//                     <DeleteNote 
//                         // toggle={this.state.displayDelete}
//                         showModal={this.showModal}
//                         // toDelete={this.state.matched[0]._id}
//                         history={this.props.history}
//                     />
//             </div>   
//             </div>
//         )
//     }
// }

// //action 2/3
// // export default connect(mapStateToProps,{})(NoteView);

// export default NoteView;