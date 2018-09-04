import React, { Component } from 'react';
import './index.css';
import DeleteNote from '../DeleteNote/DeleteNote';
import { Link } from 'react-router-dom';

//1/3
import { connect } from 'react-redux';


//2/3 for redux copy and paste the state
const mapStateToProps = (state) => {
    return {
        notes: state
    }
}
class NoteView extends Component {
    constructor(){
        super()
        this.state = {
            displayDelete: false,
            matched:[],
            notes: [
                {
                _id: '12345',
                title: "first note",
                textBody: "Every day is taco ipsum tuesday. Shrimp tacos are tasty tacos! Make it a double there pal. If you were a taco, would you eat yourself? TACOS!! Josh’s taco shack is the best taco shack. Um, Tabasco? No thanks, do you have any Cholula? Tacos al pastor made with adobada meat. Black or pinto beans? Um, Tabasco? No thanks, do you have any Cholula? TACOS!! I’ve been following that taco truck around all day. Carne asada on corn tortillas. How do you feel about hard shelled tacos?",
            },
            {
                _id: '23456',
                title: "second note",
                textBody: "Carne asada on corn tortillas. I’d have to say, those tacos are on fleek. Fish tacos: lettuce or cabbage, pico de gallo, avocado and a sour cream or citrus/mayonnaise sauce, all placed on top of a corn or flour tortilla. Side of rice and beans, please. Tacos Al pastor/De Adobada are made of thin pork steaks seasoned with adobo seasoning, then skewered and overlapped on one another on a vertical rotisserie cooked and flame-broiled as it spins. Um, Tabasco? No thanks, do you have any Cholula? These tacos are lit 🔥. Tacos, tacos, tacos. CARNE ASADA!! How do you feel about hard shelled tacos?",
            },
            {
                _id: '34567',
                title: "third note",
                textBody: "Tacos Al pastor/De Adobada are made of thin pork steaks seasoned with adobo seasoning, then skewered and overlapped on one another on a vertical rotisserie cooked and flame-broiled as it spins. Side of rice and beans, please. Burritos are very tasty. Tacos al pastor made with adobada meat. Fish tacos with cabbage slaw and a side of chips and guac. Pico de gallo, on the side please. Give me all the tacos, immediately. Tacos al pastor made with adobada meat. Give me all the tacos, immediately.",
            }
        ],
        }
    }

componentWillMount(){
    let routeId = this.props.match.params.id;
    console.log('route id', routeId)
    let matched = this.state.notes.filter((item)=>item._id === routeId)
    console.log('match', matched)
    this.setState({matched})
}


    showModal = (event) => {
        this.setState({displayDelete: !this.state.displayDelete})
    }


   
    render() {
        
        return (
            <div className='noteView'>
                <div>
                <Link to={`/edit/${this.props.match.params.id}`}>edit</Link>
                <br />
                <a href="" onClick={this.showModal}>delete</a>
                <br /><br />
                    <div>{this.state.matched[0].title} <br />
                    
                    <p> {this.state.matched[0].textBody}</p></div>
                    
                    </div>
                    <DeleteNote 
                        toggle={this.state.displayDelete} 
                        showModal={this.showModal}
                        toDelete={this.state.matched[0]._id}
                        history={this.props.history}
                    />
            </div>
        )
    }
}

export default connect(mapStateToProps,{})(NoteView);