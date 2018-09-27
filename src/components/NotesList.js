import React, {Component} from 'react';
import {Container, Row} from 'reactstrap';
import Paginations from './Paginations';
import Note from './Note';
import Search from './Search';


class NotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pageOfItems: []
        };
        this.onChangePage = this.onChangePage.bind(this);
    };

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        
        return (
            <Container expand="md" style={{marginTop: '10px'}}>
                <Search {...this.props} />
                <Row style={{marginTop: '10px'}}>
                
                    { this.state.pageOfItems.map(note => {
                        return (
                            <div key={note.id} className="col-sm-4 col-md-4 col-lg-4">
                                <Note
                                    key={note.id}
                                    id={note.id}
                                    title={note.title}
                                    content={note.content}
                                />
                            </div>
                        )
                    })}
                    
                </Row>
                <Paginations items={this.props.notes} onChangePage={this.onChangePage} />
            </Container>
        );
    }
}

export default NotesList;