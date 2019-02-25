import React from"react"

class Login extends React.Component{
    constructor(props) {

        super(props);
        this.state = {
          username:"",
          password:""


        }

    }

   changeHandler=event=>{

     this.setState({[event.target.name]:event.target.value})


}
clickHandler=(event)=>{
        localStorage.setItem("user",this.state.username)
        this.props.loginCheck();

        window.loaction.relaod()
}

    render(){
       return(
           <form >

             <input type="text" placeholder="username" name="username" onChange={this.changeHandler}/>
             <input type="text" placeholder="password" name="password"onChange={this.changeHandler}/>
             <button onClick={this.clickHandler}>Login</button>



           </form>

       )




    }
}

export default Login