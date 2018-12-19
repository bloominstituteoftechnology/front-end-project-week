import React from 'react';
import {CircleLoader} from 'react-spinners'

class Register extends React.Component{
    render(){
        return(
            <div className={this.props.name}>
            <div className="wrapper">
                <div className="container">
                    <h1>Register To Lambda Notes</h1>
                    <form className="form">

                        <input 
                        name="username"
                        type="text" 
                        placeholder="Username"
                        onChange = {this.props.ChangeHandler}
                        />

                        <input 
                        name="password" 
                        type="password"
                        placeholder="Password"
                        onChange = {this.props.ChangeHandler}
                        />

                        <button 
                        onClick={this.props.SubmitHandler}
                        type="submit" 
                        >
                        Login
                        </button>

                    </form>
                </div>
                
                <ul className="bg-bubbles">
                    <li>To-Do</li>
                    <li>Remember this note</li>
                    <li>Learn React</li>
                    <li>Create Login Page</li>
                    <li><CircleLoader /></li>
                    <li>Look Mom I'm floating!</li>
                    <li>-Finish MVP<br />-do stretch<br />-Get a job <br /> -Code for Life!<br />-Be Happy and stuff</li>
                    <li>Hi</li>
                    <li>Please Login to Lambda Notes</li>
                    <li>Lambda Rules!<br />CS14 no wait FSW14 wait maybe Web14 is the best cohort ever!<br/><br />Cs11 is okay too, Kam came from there I think</li>
                </ul>
            </div>
            </div>
        )
    }
}

export default Register