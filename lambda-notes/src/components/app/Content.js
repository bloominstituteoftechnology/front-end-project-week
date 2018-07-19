import React from 'react' ;
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import routes from './routes' ;
import NotesList from '../notes/NotesList';
import Create from '../edit/Create';


//const Content = () => {
class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
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

                <div className="page-content">
                    <Route
                        exact path ="/"                    
                        render={props => <NotesList {...props} data={this.props.data} />}
                    />
                    <Route
                        path ="/create"     //component={Create}         
                        render={props => 
                            <Create {...props} 
                                data={this.props.data}
                                addNote={this.props.addNote}
                            />
                        }
                    />
                </div>
            </React.Fragment>
        )
    }
};
export default Content;

{/*                {routes.map((route, index) => {
                    console.log(route);
                    return(
                        <div className="page-content" key={index * 1000}>
                            <Route 
                                exact={route.exact}
                                path={route.path}
                                component={route.component}
                                data={this.props.data}
                                render={props => 
                                    {...props} props={this.props}
                                />
                                }

                            />
                        </div>                   
                    )
                })}
*/}
