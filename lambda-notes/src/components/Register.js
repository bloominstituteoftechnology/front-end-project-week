import React from 'react';
import axios from 'axios';


export const Register = ({history, login, notes}) => {

    let usernameInput, passwordInput, repasswordInput;

    const handleSubmit = (event) => {

        event.preventDefault();
        console.log(usernameInput.value);
        //we're asking the server if the username already exists. It will return true or false
        axios.get(`http://localhost:5000/api/users/${usernameInput.value}`)
            .then(response => {
                console.log(response.data);
                if(response.data) {
                    document.getElementById('usernamealreadyexists').style.display = 'block';
                } else {
                    if (passwordInput.value !== repasswordInput.value) {
                        document.getElementById('usernamealreadyexists').style.display = 'none';
                        document.getElementById('passwordsdontmatch').style.display = 'block';
                    } else {
                        console.log('made it');
                        const newUser = {
                            username: usernameInput.value,
                            password: passwordInput.value,
                            notes: notes 
                        }
                        axios.post('http://localhost:5000/api/users', newUser)
                            .then(login(newUser));
                    }
                }
            }
            )
    }

    return (
        <div className='col-8 right_side'>
                <div className='row title_bar'>
                    <div className='col-4 edit_title header_font' >
                        <h4>Register for an Account:</h4>
                    </div>  
                </div>    
                <div className='row'>
                    <div className='col'>
                    <form className='new_note_form' onSubmit={handleSubmit}>
                        <div className='input_lable'>Enter Username:</div>
                        <input className='new_note_title' ref={username => usernameInput = username} placeholder='Username'  autoFocus />
                        <br/>
                        <div className='input_lable'>Enter Password:</div>
                        <input className='new_note_title' type='password' ref={password => passwordInput = password} placeholder='Password'></input>
                        <br/>
                        <div className='input_lable'>Re-enter Password:</div>
                        <input className='new_note_title' type='password' ref={repassword => repasswordInput = repassword} placeholder='Re-enter Password'></input>
                        <div id='passwordsdontmatch'>Passwords don't match</div>
                        <div id='usernamealreadyexists'>Username already exists</div>
                        <br/>
                        <button type='submit' className='save_button'>Create Account</button>   
                    </form>
                    </div>
                </div>
            </div>
    )
}