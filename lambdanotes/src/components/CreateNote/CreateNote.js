import React, { Component } from "react";

export default class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    }
}