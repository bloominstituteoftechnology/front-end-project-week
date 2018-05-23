import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';




const ListView = (props) => {
    return (
        
        /* <div className="cardstyle">
                <div className="movie-card">
                    <div className="cardtitle">
                        <h2>{title}</h2>
                </div>
                
                    <div className="movie-director">
                        Director: <em>{director}</em>
                    </div>
                    <div className="movie-metascore">
                        Metascore: <strong>{metascore}</strong>
                    </div>
                    <div className="movie-actors">
                        <h3>Actors</h3>
                    </div>
                    {stars.map(star => (
                        <div key={star} className="movie-star">
                            {star}
                    </div>
                    
                
                ))} 
            </div>   */
            <div>
            <Card inverse>
                <CardImg width="10%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
                <CardImgOverlay>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <CardText>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                </CardImgOverlay>
            </Card>
            <Card inverse>
                <CardImg width="10%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
                <CardImgOverlay>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <CardText>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                </CardImgOverlay>
            </Card>



        </div>
    );
};

export default ListView;