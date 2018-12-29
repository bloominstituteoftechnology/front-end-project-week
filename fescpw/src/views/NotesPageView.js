import React, { Component } from 'react';
import NotesPage from '../components/NotesPage';

import NoteAuth from '../components/NoteAuth';

class NotesPageView extends Component {
    isAuthenticated() {
        // Check whether the current time is past the
        // Access Token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt;
    }
    render() {
        // console.log(process.env);
        if (this.isAuthenticated()) {
            return (
                <NotesPage />
            );
        } else {
            return (
                <NoteAuth welcome />
            );
        }
    }
}

export default NotesPageView;