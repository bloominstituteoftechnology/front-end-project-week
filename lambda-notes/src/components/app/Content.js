import React from 'react' ;
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import routes from './routes' ;


const Content = () => {
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
                return(
                    <div className="page-content" key={index * 1000}>
                        <Route 
                            exact={route.exact}
                            path={route.path}
                            component={route.component}
                        />
                    </div>                   
                )
            })}
        </React.Fragment>
    )
};
export default Content;




