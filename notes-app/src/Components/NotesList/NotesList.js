import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';



class NotesList extends Component {
    
    render(){
        return (
            <div>
                <div className="inner_outer_notes">
                <h3 className="list_title">Your Notes:</h3>
                <div className="note_container">
                {this.props.state.notes.map(each => (


        <Link to={`/note/${each.id}`} style={{ textDecoration: 'none' }}>
                    <div 
                        className="note" 
                        key={each.id}
                        allnotes={this.state}    
                    >
                        
                        <div className="note_title">
                        {each.title}<br /><br />
                        </div>
                        {each.content}
                    </div>
                    </Link>
                    
                ))}
                </div>
                </div>
            </div>
        )
    }

    //<div className="inner_outer_notes">
//                         <h3 className="list_title">Your Notes:</h3>
//                         <div className="note_container">
//                         {/* changes state to props below */}
//                         {this.state.notes.map(this.generateNotes
//                             )
//                         }
//                         </div>
//                     </div>




    

}

export default NotesList;







// 1/3 for redux 
// import { connect } from 'react-redux';





//2/3 for redux copy and paste the state
// const mapStateToProps = (state) => {
//     return {
//         notes: state
//     }
// }

// class NotesList extends Component {
//     constructor(){
//         super()
//         this.state = {
//             notes:
//             [
//                 {
//                 _id: '12345',
//                 title: "Note Title",
//                 textBody: "Every day is taco ipsum tuesday. Shrimp tacos are tasty tacos! Make it a double there pal. If you were a taco, would you eat yourself? TACOS!! Josh’s taco shack is the best taco shack. Um, Tabasco? No thanks, do you have any Cholula? Tacos al pastor made with adobada meat. Black or pinto beans? Um, Tabasco? No thanks, do you have any Cholula? TACOS!! I’ve been following that taco truck around all day. Carne asada on corn tortillas. How do you feel about hard shelled tacos?",
//             },
//             {
//                 _id: '23456',
//                 title: "Note Title",
//                 textBody: "Carne asada on corn tortillas. I’d have to say, those tacos are on fleek. Fish tacos: lettuce or cabbage, pico de gallo, avocado and a sour cream or citrus/mayonnaise sauce, all placed on top of a corn or flour tortilla. Side of rice and beans, please. Tacos Al pastor/De Adobada are made of thin pork steaks seasoned with adobo seasoning, then skewered and overlapped on one another on a vertical rotisserie cooked and flame-broiled as it spins. Um, Tabasco? No thanks, do you have any Cholula? These tacos are lit 🔥. Tacos, tacos, tacos. CARNE ASADA!! How do you feel about hard shelled tacos?",
//             },
//             {
//                 _id: '34567',
//                 title: "Note Title",
//                 textBody: "Tacos Al pastor/De Adobada are made of thin pork steaks seasoned with adobo seasoning, then skewered and overlapped on one another on a vertical rotisserie cooked and flame-broiled as it spins. Side of rice and beans, please. Burritos are very tasty. Tacos al pastor made with adobada meat. Fish tacos with cabbage slaw and a side of chips and guac. Pico de gallo, on the side please. Give me all the tacos, immediately. Tacos al pastor made with adobada meat. Give me all the tacos, immediately.",
//             },
//             {
//                 _id: '45678',
//                 title: "Note Title",
//                 textBody: "Every day is taco ipsum tuesday. Shrimp tacos are tasty tacos! Make it a double there pal. If you were a taco, would you eat yourself? TACOS!! Josh’s taco shack is the best taco shack. Um, Tabasco? No thanks, do you have any Cholula? Tacos al pastor made with adobada meat. Black or pinto beans? Um, Tabasco? No thanks, do you have any Cholula? TACOS!! I’ve been following that taco truck around all day. Carne asada on corn tortillas. How do you feel about hard shelled tacos?",
//             },
//             {
//                 _id: '56789',
//                 title: "Note Title",
//                 textBody: "Carne asada on corn tortillas. I’d have to say, those tacos are on fleek. Fish tacos: lettuce or cabbage, pico de gallo, avocado and a sour cream or citrus/mayonnaise sauce, all placed on top of a corn or flour tortilla. Side of rice and beans, please. Tacos Al pastor/De Adobada are made of thin pork steaks seasoned with adobo seasoning, then skewered and overlapped on one another on a vertical rotisserie cooked and flame-broiled as it spins. Um, Tabasco? No thanks, do you have any Cholula? These tacos are lit 🔥. Tacos, tacos, tacos. CARNE ASADA!! How do you feel about hard shelled tacos?",
//             },
//             {
//                 _id: '67890',
//                 title: "Note Title",
//                 textBody: "Tacos Al pastor/De Adobada are made of thin pork steaks seasoned with adobo seasoning, then skewered and overlapped on one another on a vertical rotisserie cooked and flame-broiled as it spins. Side of rice and beans, please. Burritos are very tasty. Tacos al pastor made with adobada meat. Fish tacos with cabbage slaw and a side of chips and guac. Pico de gallo, on the side please. Give me all the tacos, immediately. Tacos al pastor made with adobada meat. Give me all the tacos, immediately.",
//             },
//             {
//                 _id: '78901',
//                 title: "Note Title",
//                 textBody: "Every day is taco ipsum tuesday. Shrimp tacos are tasty tacos! Make it a double there pal. If you were a taco, would you eat yourself? TACOS!! Josh’s taco shack is the best taco shack. Um, Tabasco? No thanks, do you have any Cholula? Tacos al pastor made with adobada meat. Black or pinto beans? Um, Tabasco? No thanks, do you have any Cholula? TACOS!! I’ve been following that taco truck around all day. Carne asada on corn tortillas. How do you feel about hard shelled tacos?",
//             },
//             {
//                 _id: '89012',
//                 title: "Note Name",
//                 textBody: "Carne asada on corn tortillas. I’d have to say, those tacos are on fleek. Fish tacos: lettuce or cabbage, pico de gallo, avocado and a sour cream or citrus/mayonnaise sauce, all placed on top of a corn or flour tortilla. Side of rice and beans, please. Tacos Al pastor/De Adobada are made of thin pork steaks seasoned with adobo seasoning, then skewered and overlapped on one another on a vertical rotisserie cooked and flame-broiled as it spins. Um, Tabasco? No thanks, do you have any Cholula? These tacos are lit 🔥. Tacos, tacos, tacos. CARNE ASADA!! How do you feel about hard shelled tacos?",
//             },
//             {
//                 _id: '90123',
//                 title: "Carne Asada",
//                 textBody: "Tacos Al pastor/De Adobada are made of thin pork steaks seasoned with adobo seasoning, then skewered and overlapped on one another on a vertical rotisserie cooked and flame-broiled as it spins. Side of rice and beans, please. Burritos are very tasty. Tacos al pastor made with adobada meat. Fish tacos with cabbage slaw and a side of chips and guac. Pico de gallo, on the side please. Give me all the tacos, immediately. Tacos al pastor made with adobada meat. Give me all the tacos, immediately.",
//             },
//         ],
//         }
//     }

//     // componentWillMount(){
//     //     let reversed = Array.from(this.props.notes.reverse());
//     //     this.setState({ notes: reversed })
//     // }


//     generateNotes = (what, where) => {
//         return (
            
//                 <Link to={`/note/${what._id}`} style={{ textDecoration: 'none' }}>
//                     <div className='note' key={what._id}>
//                         <div>
//                         <br />
//                             <div className="note_title">
//                                 {what.title}<br /><br />
//                             </div>
//                             {what.textBody}<br />
//                         </div>
//                     </div>
//                 </Link>
            
//         )
//     }

    
//     render() {

//         console.log("here:", this.props)
        
//         // return (
//         //     <div>
//         //         {/* <div>Title</div>
//         //         <div>Every day is taco ipsum tuesday. Shrimp tacos are tasty tacos! Make it a double there pal. If you were a taco, would you eat yourself? TACOS!! Josh’s taco shack is the best taco shack. Um, Tabasco? No thanks, do you have any Cholula? Tacos al pastor made with adobada meat. Black or pinto beans? Um, Tabasco? No thanks, do you have any Cholula? TACOS!! I’ve been following that taco truck around all day. Carne asada on corn tortillas. How do you feel about hard shelled tacos?</div>,
//         //         <div>Title</div>
//         //         <div>Carne asada on corn tortillas. I’d have to say, those tacos are on fleek. Fish tacos: lettuce or cabbage, pico de gallo, avocado and a sour cream or citrus/mayonnaise sauce, all placed on top of a corn or flour tortilla. Side of rice and beans, please. Tacos Al pastor/De Adobada are made of thin pork steaks seasoned with adobo seasoning, then skewered and overlapped on one another on a vertical rotisserie cooked and flame-broiled as it spins. Um, Tabasco? No thanks, do you have any Cholula? These tacos are lit 🔥. Tacos, tacos, tacos. CARNE ASADA!! How do you feel about hard shelled tacos?</div>,
//         //         <div>Title</div>
//         //         <div>Tacos Al pastor/De Adobada are made of thin pork steaks seasoned with adobo seasoning, then skewered and overlapped on one another on a vertical rotisserie cooked and flame-broiled as it spins. Side of rice and beans, please. Burritos are very tasty. Tacos al pastor made with adobada meat. Fish tacos with cabbage slaw and a side of chips and guac. Pico de gallo, on the side please. Give me all the tacos, immediately. Tacos al pastor made with adobada meat. Give me all the tacos, immediately.</div>, */}
//         //         {notesCollection}
//         //     </div>
//         console.log("noteslist", this.props)
//         return (
//                     <div className="inner_outer_notes">
//                         <h3 className="list_title">Your Notes:</h3>
//                         <div className="note_container">
//                         {/* changes state to props below */}
//                         {this.state.notes.map(this.generateNotes
//                             )
//                         }
//                         </div>
//                     </div>
//                 )
//             }
        
        
    
// }

// // 3/3 for redux export with this pattern
// // export default connect(mapStateToProps,{/*actionshere*/})(NotesList);

// export default NotesList;