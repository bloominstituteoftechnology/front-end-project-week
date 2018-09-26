import React, { Component } from 'react';
import { connect } from 'react-redux';
import {searchAction, fetchingNotesAction} from "../../actions";

class Search extends React.Component {

constructor(props){
        super(props);
        this.state= {
                search: "",
        };

}


changeHandler = event => {
        this.setState({[event.target.name]: event.target.value}, () =>{
		if(this.state.search ===""){
			this.props.fetchingNotesAction();
		}
		else{
                this.props.searchAction(this.state.search);
		}
	});
}

/*componentDidUpdate(prevProps,  prevState) {
        console.log(prevProps);
        if (prevProps.notes !== this.props.notes){
                this.props.fetchingNotesAction();
	}
}*/	




render() {

        return (
	<div>	
		<form>
        	<input className="search-bar" onChange={this.changeHandler} type="text" name="search" placeholder="search"  />
        	</form>
	</div>
	);
}
}

const mapStateToProps = state => {
  return {
          notes: state.notes,
          fetching: state.fetchingNotes,
          saving: state.addingNote
  };
};


export default connect(mapStateToProps, {searchAction, fetchingNotesAction})(Search);
