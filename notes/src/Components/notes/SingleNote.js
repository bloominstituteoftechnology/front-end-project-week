import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as actions from '../../Actions';
import DeleteModal from './DeleteModal';


const EditTitle = styled(Link)`
    font-size: 24px;
    font-weight: 700px;
    justify-content: center;
    padding: 10px;
    font: Roboto Bold;
    display: flex;
    flex-flow: row;
`;


class SingleNote extends Component {
        componentDidMount () {
            const { id } = this.props.match.params;
            this.props.getNote(id)
        }
     
        render() { 
            return (
                <div>
                    <DeleteModal id={this.props.note._id}/>
                    <EditTitle to={`/note/get/${this.props.note._id}`}>
                        <span>edit</span>
                    </EditTitle>
                    <div>
                        <EditTitle>{this.props.note.title}</EditTitle>
                        <p>{this.props.note.textBody}</p>
                    </div>
                </div>
            );
        }
    }
    
const mapStateToProps = state => {
    return {
        note: state
    }
}
     
export default connect(mapStateToProps, actions)(SingleNote); 