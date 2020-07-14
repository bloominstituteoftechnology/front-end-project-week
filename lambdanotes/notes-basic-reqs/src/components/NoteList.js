import React, { Component } from 'react';
import Note from './Note';



class NoteList extends Component {
    constructor() {
        super();
        this.state = {
            notes: [
                {
                    id: 0,
                    title: 'Dominic',
                    text: "Lorem ipsum dolor sit amet litora faucibus nisl nulla. Dolor, dui, finibus posuere, class blandit, felis aliquam eget nisi phasellus suscipit. Luctus amet nisi nunc, elit interdum, mi auctor aptent leo, tincidunt porttitor, feugiat velit faucibus odio ex, rutrum. Et curabitur sagittis elit, torquent sem, vestibulum, nibh, at, eleifend. Imperdiet augue blandit hac dignissim condimentum ligula enim, est tellus, risus turpis lectus ac mattis, orci a, massa. Duis phasellus quam blandit, ad molestie vel dui, arcu, quisque. Lacinia a, nulla, cras ut cursus, odio sem, a elit, torquent libero. Sed vivamus proin porta donec laoreet, curabitur turpis lectus phasellus. Egestas ultrices nisi, posuere sed nulla, vitae, varius vivamus mollis euismod. Vitae, convallis feugiat luctus, eget. Praesent varius mattis porttitor vel hendrerit gravida varius, et, bibendum. Sodales nostra, nisi, mauris, etiam massa cursus, orci vitae, laoreet, fames enim.",
                },
                {
                id: 1,
                    title: 'Sophia',
                    text: "Lorem ipsum dolor sit amet enim porttitor, nulla, nulla erat, quis neque vestibulum, nisi amet. Nunc vitae, suspendisse arcu, dignissim proin cursus ullamcorper in. Et, lacinia feugiat porttitor, sem et auctor, ut ex euismod, in dui volutpat. Lacinia, augue vel lectus, blandit quam elit. Leo volutpat, vel, maecenas porta, finibus, at rhoncus porttitor lacinia condimentum ac. Erat laoreet cursus ante, urna, placerat ipsum ex cursus, euismod nec. Eu massa, euismod, fringilla, at fringilla cras nisi, sed platea laoreet felis sagittis, purus auctor, nisi congue.",  
                },
                {
                id: 2,
                    title: 'Mykela',
                    text: "Ac bibendum, tortor mollis taciti nulla erat urna, scelerisque. Conubia urna, dolor amet, gravida tempus consequat posuere, condimentum nam erat maximus non sodales. Nostra, a magna cursus commodo sagittis aptent duis lacinia, dictum placerat sem, id nibh, pharetra. Augue ac dolor, vitae luctus, finibus. Nullam nibh luctus, praesent nec, vitae, fermentum ex elit. Blandit venenatis praesent posuere, himenaeos pharetra ut nunc, cras in, duis tempor, taciti posuere blandit, congue, a ad risus. Aenean nullam accumsan interdum fringilla, porta feugiat suspendisse porttitor blandit in et, quam. Magna platea hendrerit integer in, sagittis mollis feugiat, commodo conubia.",
                },
                {
                id: 3,
                    title: 'Ava',
                    text:  "Ac bibendum, tortor mollis taciti nulla erat urna, scelerisque. Conubia urna, dolor amet, gravida tempus consequat posuere, condimentum nam erat maximus non sodales. Nostra, a magna cursus commodo sagittis aptent duis lacinia, dictum placerat sem, id nibh, pharetra. Augue ac dolor, vitae luctus, finibus. Nullam nibh luctus, praesent nec, vitae, fermentum ex elit. Blandit venenatis praesent posuere, himenaeos pharetra ut nunc, cras in, duis tempor, taciti posuere blandit, congue, a ad risus. Aenean nullam accumsan interdum fringilla, porta feugiat suspendisse porttitor blandit in et, quam. Magna platea hendrerit integer in, sagittis mollis feugiat, commodo conubia.",
                },
                {
                id: 4,
                    title: 'Layla',
                    text:  "Ac bibendum, tortor mollis taciti nulla erat urna, scelerisque. Conubia urna, dolor amet, gravida tempus consequat posuere, condimentum nam erat maximus non sodales. Nostra, a magna cursus commodo sagittis aptent duis lacinia, dictum placerat sem, id nibh, pharetra. Augue ac dolor, vitae luctus, finibus. Nullam nibh luctus, praesent nec, vitae, fermentum ex elit. Blandit venenatis praesent posuere, himenaeos pharetra ut nunc, cras in, duis tempor, taciti posuere blandit, congue, a ad risus. Aenean nullam accumsan interdum fringilla, porta feugiat suspendisse porttitor blandit in et, quam. Magna platea hendrerit integer in, sagittis mollis feugiat, commodo conubia.",
                },
                {
                id: 5,
                    title: 'Bethany',
                    text:  "Ac bibendum, tortor mollis taciti nulla erat urna, scelerisque. Conubia urna, dolor amet, gravida tempus consequat posuere, condimentum nam erat maximus non sodales. Nostra, a magna cursus commodo sagittis aptent duis lacinia, dictum placerat sem, id nibh, pharetra. Augue ac dolor, vitae luctus, finibus. Nullam nibh luctus, praesent nec, vitae, fermentum ex elit. Blandit venenatis praesent posuere, himenaeos pharetra ut nunc, cras in, duis tempor, taciti posuere blandit, congue, a ad risus. Aenean nullam accumsan interdum fringilla, porta feugiat suspendisse porttitor blandit in et, quam. Magna platea hendrerit integer in, sagittis mollis feugiat, commodo conubia.",
                },
            ]
        };
    }
    render() {
        return (
            <div>
                <div class="container">
                
                {this.state.notes.map(note => <Note note={note} />)}
                
                </div>
            </div>
        )
    }
}


// function MovieDetails({ movie }) {
//     const { id } = movie;
//     return (
//         <NavLink to={`/movies/${id}`}>
//         <MovieCard movie={movie} />
//         </NavLink>
//     );
//     }


export default NoteList;