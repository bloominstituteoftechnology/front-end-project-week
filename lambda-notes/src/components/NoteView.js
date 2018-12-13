import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const NoteDiv = styled.div`
	border-radius: 0 4px 4px 0;
    padding: .5rem 2.5rem;
    background-image: linear-gradient(rgba(236,122,117, 0.7),rgba(69,158,161, 0.3));
    width: 740px;
    height: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
`

const NavDiv = styled.div`
    align-self: flex-end;
    width: 95px;
    height: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 700;
`

const Title = styled.h2`
	white-space: pre-wrap;
    margin-top: 1.4rem;
    margin-bottom: 2.6rem; 
    font-size: 2.1rem;
    font-weight: 700;
`

const Paragraph = styled.p`
	white-space: pre-wrap;
    // font-size: 1.4rem;
    line-height: 2;
`

export default class NoteView extends Component {

	componentDidMount() {
		this.props.viewNote(this.props.match.params.id);
	}

	render() {
		return (
			<div>
				{this.props.note._id === this.props.match.params.id && (
					<NoteDiv>
						<NavDiv>
							<Link to={`/edit/${this.props.note._id}`}>edit</Link>
							<Link to="/">
                                <span onClick={() => this.props.deleteNote(this.props.match.params.id)}>delete</span>
                            </Link>
						</NavDiv>

						{this.props.fetching ? (
							<p>Loading...</p>
						) : (
							<div>
								<Title>{this.props.note.title}</Title>
								<Paragraph><ReactMarkdown source={this.props.note.textBody} /></Paragraph>
							</div>
						)}
					</NoteDiv>
				)}
			</div>
		);
	}
}
