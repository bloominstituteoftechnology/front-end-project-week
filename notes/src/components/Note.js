import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import Tag from './Tag';


class Note extends Component {
  render() {
        return (       
            <div className="note-container">
                <Link to={`/notes/${this.props.id}`}>
                    <Card>
                        <CardBody>
                            <CardTitle>{this.props.title}</CardTitle>
                            <CardText>
                                {this.props.content} 
                            </CardText>
                            <div className="tags">
                                {this.props.tags.length > 0 ? this.props.tags.map(tag => <Tag key={tag} tagName={tag} />) : null}
                            </div>
                        </CardBody>
                    </Card>
                </Link>
            </div>
            
        )
  }
}

export default Note;