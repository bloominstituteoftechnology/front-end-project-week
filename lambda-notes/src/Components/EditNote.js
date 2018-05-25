import React, { Component } from 'react';
import Button from "./Button";
import { Form, Input, Row, Col } from 'reactstrap';


class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {             
            notes: [ 
            {title: 'HTML', content: 'HTML was the first week!', id: 0}, 
            {title: 'LESS', content: 'Less is more!', id: 1},
            {title: 'Javascript', content: 'asldkfjasldkj ;asldjf;alsdjf;laskdf;dfj a;ldskjfalksdf aklsdjfasdlkfj aksd flka sdflka sdflk as;dlf jalskd flk df;lkasdlfk asldkf jas;ldk falskd jflaksd flakef lawj flaks laskdf akshg laweflseiflskdnv kajsd fksjd v,jbsf,j dkfj ;lakdsjf;lakjdsfl;aksj', id: 2},
            {title: 'jQuery', content: 'I hate jQuery it\'s so old!!!  Like flip-phone old!!!!', id: 3},
                ], };
    }
    render() {
        console.log("edit props: ",this.props)
        return (
            
            <div className='TemplateContainer'>

                <Row>
                    <Col sm="12">
                        <Form onSubmit={this.saveNote} className="form">
                            <Input 
                                type="text" 
                                name="title"
                                value={this.state.notes[this.props.match.params.id].title}                                 
                                className="TopInput"/>
                            <Input 
                                type="textarea" 
                                name="content" 
                                value={this.state.notes[this.props.match.params.id].content}
                                onChange={this.handleChange}
                                className="BottomInput"/>
                                <Button link='/' text='Save' />
                        </Form>
                    </Col>
                </Row>

        </div>
        );
    }
}

export default EditNote;