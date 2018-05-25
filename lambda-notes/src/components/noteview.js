import React from 'react';
import SideNav from './sidenav.js';
import { Row, Col, Card, CardBody, CardTitle, CardText, CardColumns} from 'reactstrap'; 

const NoteView = (props) => {
    return (
        <div>
            <SideNav />
                <Card>
                    <CardBody>
                        <a href="#">Edit</a>
                        <a href="#">Delete</a>
                        <CardTitle className="noteName">Note Name</CardTitle>
                        <CardText className="noteText">Ullamco nisi do reprehenderit amet fugiat ullamco dolore pariatur fugiat consectetur. Proident velit elit nisi mollit ea adipisicing cillum. Reprehenderit officia cillum adipisicing elit ullamco proident nulla proident sint ex.

Deserunt pariatur quis esse ipsum ad consequat ad esse tempor ex officia nulla. Cupidatat sint mollit in commodo labore quis aliqua Lorem proident ullamco nulla deserunt eiusmod tempor. Veniam in mollit sit reprehenderit occaecat ex incididunt ut id. Adipisicing dolor elit incididunt exercitation irure est veniam eiusmod cupidatat. Mollit nisi nostrud labore quis do consectetur quis non ad duis officia. Exercitation tempor aliqua do ipsum est cupidatat sit deserunt exercitation. Culpa exercitation ipsum adipisicing dolor exercitation eiusmod nulla veniam aliquip proident magna eiusmod.

Irure laborum dolore amet reprehenderit dolore consequat reprehenderit. Exercitation dolore consequat ea adipisicing esse velit consequat ea do enim sunt Lorem. Eu elit sint duis tempor sint tempor cillum commodo ea magna nisi laboris.</CardText>
                    </CardBody>
                </Card>
        </div>           

    );
};

export default NoteView;