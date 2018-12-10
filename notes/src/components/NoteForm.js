import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { deleteChecked, addNote } from '../actions';

import { 
    ButtonsContainer, 
    StyledButton, 
    MassDeleteButton,
    SVGIcon,
    TitleInputContainer,
    InitialInput,
    FormContainer,
    NoteActions
} from '../styles';


class NoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: '',
        }
    }

    onSubmit = () => {
        const { title, textBody } = this.state;
        if (!title || !title.length || !textBody.length) return;
        const note = {title, textBody};
        this.props.addNote(note);
        this.props.history.push('/');
    }

    render() {
        let titleRef = null;
        let bodyRef = null;
        let closeRef = null;
        let addRef = null;

        const blurAll = () =>  {
            titleRef.blur()
            bodyRef.blur()
            closeRef.blur()
            addRef.blur()
        }
        return (
            <div>
                <Route 
                    path="/"
                    exact
                    render={props =>
                        <FormContainer addForm="true"
                            onSubmit={e => {
                                e.preventDefault();
                                this.onSubmit();
                                this.setState({title: '', textBody: ''});
                                blurAll();
                            }}
                        >
                            <TitleInputContainer>
                                <input tabiidex="2" ref={ref => titleRef = ref} value={this.state.title}  onChange={e => this.setState({title: e.target.value})} placeholder='Title' className="title" required/>
                                <SVGIcon pin="true"/>
                            </TitleInputContainer>
                            <InitialInput>
                                <textarea tabidex="1" ref={ref => bodyRef = ref} value={this.state.body}  onChange={e => this.setState({textBody: e.target.value})}  placeholder='Take a note...' className="text-body" required/>
                                <NoteActions className='note-actions'>
                                    <SVGIcon checkBox="true"/>
                                    <SVGIcon brush="true"/>
                                    <SVGIcon image="true"/>
                                </NoteActions>
                            </InitialInput>
                            <ButtonsContainer className="button-container">
                                <StyledButton ref={ref => closeRef = ref} type="button" onClick={() => blurAll()}>Close</StyledButton>
                                <StyledButton ref={ref => addRef = ref} type="submit">Add</StyledButton>
                            </ButtonsContainer>
                        </FormContainer>  
                    }
                />
    
                <Route 
                    path="/select"
                    exact
                    render={props => 
                        <FormContainer>
                            <MassDeleteButton 
                                type="button"
                                amountChecked={this.props.checkedNotes.length}
                                onClick={e => {
                                    e.preventDefault();
                                    if (!this.props.checkedNotes.length) return;
                                    this.props.deleteChecked(this.props.checkedNotes);
                                    this.props.history.push('/');
                                }}
                            >Delete Selected</MassDeleteButton>
                        </FormContainer>}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { checkedNotes } = state;
    return {
        checkedNotes
    };
}

export default connect(mapStateToProps, { deleteChecked, addNote })(NoteForm);

