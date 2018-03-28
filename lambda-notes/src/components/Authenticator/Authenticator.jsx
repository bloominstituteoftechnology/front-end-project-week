import React, { Component } from 'react';


import './Authenticator.css';
import App from '../../App';

class Authenticator extends Component {

   constructor() {
      super();
      this.state = {
         user: null,
      }

      this.toggleDisplay = id => {
         let element = document.getElementById(id);
         element.style.display === 'none' ? element.style.display = 'inline-block' : element.style.display = 'none';
      }

      this.asdf = entry => {
         let hiddenEntry = entry;
         return hiddenEntry;
      }

      this.checkUser = User => {
         console.log(User);
         if(localStorage.getItem(this.asdf(User.name))) {
            console.log("userFound");
            this.setState({user: User.name});

         }else {
            console.log('user not found');
            // ask to create user
            document.getElementById('authMessage').innerHTML = "User not found, would you like to create a new user?";
            
            //setup no button
            let noButton = document.createElement("button");
            noButton.innerHTML = "No";
            noButton.id ="noButton";
            noButton.onclick = () => {
               console.log('no pressed:');
               this.setupNewLogin();

               this.toggleDisplay('noButton');
               this.toggleDisplay('yesButton');
               document.getElementById('authMessage').innerHTML = '';

               this.toggleDisplay('userId');
               this.toggleDisplay('userPw');
               this.toggleDisplay('enterButton');
            }
            //setup yes button
            let yesButton = document.createElement("button");
            yesButton.innerHTML = 'Yes';
            yesButton.id = 'yesButton';
            yesButton.onclick = () => {
               console.log('yes pressed:');
               localStorage.setItem(User.name, JSON.stringify([
                  {
                    index: 0,
                    title: "New Note Title",
                    content: "New Note Content",
                  }
                ]));
               this.setState({user: document.getElementById('userId').value})
            }

            document.getElementById('authMessage').appendChild(yesButton);
            document.getElementById('authMessage').appendChild(noButton);


            this.toggleDisplay('userId');
            this.toggleDisplay('userPw');
            this.toggleDisplay('enterButton');
         }

      }



      this.setupNewLogin = () => {
         this.setState({user:null}) ;

      }
   }


   render() {
      return(
      <div className="authenticator">
         {this.state.user ? (<App user={this.state.user} returnToLogin={this.setupNewLogin}/>) : (
            <div className="authenticatorModal">
               <p id="modalText"> Login to access your notes: </p>
               <p id="authMessage"> </p>
               <div>
                  <input id="userId" type="text" placeholder="Username"/>
               </div>
               <div>
                  <input id="userPw" type="password" placeholder="Password"/>
               </div>
               <div>
                  <button id="enterButton" onClick={() => {
                     if(document.getElementById('userId').value !== "" && document.getElementById('userPw').value !== ""){
                        this.checkUser({
                           name: document.getElementById('userId').value,
                           password: document.getElementById('userPw').value,
                           })
                     }
                  }}>Enter</button>
               </div>
            </div>)}
         

      </div>
      );
   }
}

export default Authenticator;

