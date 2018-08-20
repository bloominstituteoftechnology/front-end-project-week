import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import Tag from './Tag';
import { MarkdownPreview } from "react-marked-markdown";

class Note extends Component {
  render() {
        return (       
            <div className="note-container">
                
                    <Card>
                        <CardBody>
                            <CardTitle>{this.props.title}</CardTitle>
                            <CardText>
                                <MarkdownPreview value={this.props.content} />
                            </CardText>
                            <div className="tags">
                                {this.props.tags.length > 0 ? this.props.tags.map(tag => <Tag key={tag} tagName={tag} />) : null}
                            </div>
                        </CardBody>
                    </Card>
            </div>
            
        )
  }
}

export default Note;