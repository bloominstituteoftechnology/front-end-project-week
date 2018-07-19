import React from 'react' ;
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import routes from './routes' ;
import NotesList from '../notes/NotesList';


// const Content = () => {
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            heyHo: [1,2,3], 
        };
    }
    render() {
        //console.log(this.state);
        return(
            <React.Fragment>
                {routes.map((route, index) => {
                    return(
                        <div className="page-title" key={index} >
                            <Route                            
                                exact={route.exact}
                                path={route.path}
                                component={route.title}             
                            />                        
                        </div>
                    )
                })}

                {routes.map((route, index) => {
                    console.log('heyheyhey',route)
                    return(
                        <div className="page-content" key={index * 1000}>
                            <Route 
                                exact={route.exact}
                                path={route.path}
                                component={route.component}
                                render={props => 
                                    <NotesList {...props}
                                        myProps={this.state.heyHo}
                                    />
                                }
                            />
                        </div>                   
                    )
                })}
            </React.Fragment>
        )
    }
};
export default Content;




