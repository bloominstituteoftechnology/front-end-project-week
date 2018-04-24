import React from "react";
import { Button } from 'reactstrap';
const Home = () =>{
    return (<React.Fragment>
<div className="home-styles">
<div className="hDiv-styles">
<h2 className="h-styles" >Lambda
 Notes</h2>
 </div>
 <div className="button-styles">
 <Button color="primary" className="button">View your memes</Button>
 
 <Button color="primary"className="button">+create new meme</Button>
 </div>
 </div>
</React.Fragment>)
}
export default Home;