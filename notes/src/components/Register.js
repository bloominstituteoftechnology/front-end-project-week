import React from 'react';
import { Form, Input } from 'reactstrap';

class Register extends React.Component {
    render() {
        return (
            <Form>
                <Input placeholder='username' />
                <Input placeholder='password' />
            </Form>
        );
    };
};

export default Register;