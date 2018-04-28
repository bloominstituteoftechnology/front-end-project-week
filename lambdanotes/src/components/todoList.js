import React, { Component } from 'react';
import Todo from './todo';
import './components.css'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const TodoList = props => {
    return (
        <div className="ListContainer">
            <div className="Todo__Container">
                <div className="Todo__Title">Your Notes:</div>
                    <div className="Todo__CardsWrapper">
                        {props.cardinfo.map ((item) => {
                            const { title, content } = item;
                            return (
                                <Link to={`/view/${item.id}`} className="Todo__Link">
                                <div className="Todo__Card" id="item">
                                    <div className="Todo__NoteTitle">{title}</div>
                                    <div className="Todo__NoteContent">{content}</div>
                                </div>
                                </Link>
                            );
                        })}
                    </div>
            </div>
        </div>
        );
}

function mapStateToProps(state) {
    return {
      cardinfo: state
    };
  }
  
export default connect(mapStateToProps )(TodoList);