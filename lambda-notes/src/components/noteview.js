import React, { Component } from 'react';

class NoteView extends Component {
    render() {
        return (
            <div className="section">

                <div className="section__content__left">
                    <h1>Lambda Notes</h1>
                    <div className="button__main">View Your Notes</div>
                    <br />
                    <div className="button__main">+ Create New Note</div>

                </div>

                <div className="section__content__right">
                    <div className="section__content__inputs">
                        <h3>Create New Note</h3>
                        <a href="#">edit</a>
                        <a href="#">delete</a>
                        <div>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoteView;