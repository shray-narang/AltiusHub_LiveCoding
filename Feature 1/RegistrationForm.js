import React, {useState} from 'react';
import validator from 'validator';
import PasswordValidator from 'password-validator';
import axios from 'axios';

function RegistrationForm(){
    const[username,setUsername] = useState('');
    const[email,setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[errors,setErrors] = useState({});
    
    const schema = new passwordValidator();

    schema
.is().min(8)                                   
.is().max(100)                                 
.has().uppercase()                           
.has().lowercase()                             
.has().digits(1)                          
.has().not().spaces()                         
.is().not().oneOf(['Passw0rd', 'Password123']);

    const handleSubmit = async() =>{
        let pass = true;
        let errors = {};
        if(!validator.isEmail(email)){
            errors.email = "Invalid Email Format";
            pass = false;
        }
        if(!schema.validate(password)){
            error.password = "Password must contain minimum 8 characters with uppercase, lowercase, one digit atleast, and no spaces";
            pass = false;
        }
        setErrors(errors);
        if(pass){
            try {const response = await axios.post('/register',{username, email, password});
            console.log(response.data);}
            catch (error){
                console.error(error);
            }
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username:
                <input type="text" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </label>
                <label>Email:
                <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </label>
                <label>Password:
                <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </label>
                <br/>
                <button type="submit">Create Account</button>
            </form>
        </div>

    )

}

export default RegistrationForm;