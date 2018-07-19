import React from 'react' ;
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {connect} from 'react-redux';

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
                        exact path ="/" component={NotesList}
                        props{...this.props}                  
                    />

                    <Route
                        path ="/create"     
                        component={Create}      
                    />
                </div>
            </React.Fragment>
        )
    }
};
const mapStateToProps = state => {
    return {
      notes: state.notes
    };
  }
  console.log(this.state);
  export default connect (mapStateToProps, {NotesList})(Content);
  
//export default Content;

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
