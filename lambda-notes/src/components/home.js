import React from "react";
import { Button } from 'reactstrap';
import{ Link } from 'react-router-dom'
const Home = () =>{
    return (<React.Fragment>
<div className="home-styles">
<div className="hDiv-styles">
<h2 className="h-styles" >Lambda
 Notes</h2>
 </div>
 <div className="button-styles">
 <Link to="/">
 <Button color="primary" className="button">View your note</Button>
 </Link>
 <Button color="primary"className="button">+ create new Note</Button>
 </div>
 </div>
</React.Fragment>)
}
export default Home;