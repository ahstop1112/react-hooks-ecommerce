import React, { Component } from 'react';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/utils';
import './style.scss';

class SignUp extends Component {
    constructor(){
        super();
        this.state ={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword){
            alert('Password not match');
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        }catch (error){

        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name] : value});
    }

    render() { 

        const { displayName, email, password, confirmPassword } = this.state;

        return ( 
            <div className="sign-up">
                <h2 className="title">I do not have an account </h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="displayName" 
                        type="text"
                        label="displayName"
                        onChange={this.handleChange} 
                        value={displayName} 
                        required 
                    />
                    <FormInput 
                        name="email" 
                        type="email"
                        label="Email"
                        onChange={this.handleChange} 
                        value={email} 
                        required 
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        label="Password"
                        onChange={this.handleChange} 
                        value={password} 
                        required
                    />
                    <FormInput 
                        name="confirmPassword" 
                        type="password"
                        label="Password"
                        onChange={this.handleChange} 
                        value={confirmPassword} 
                        required 
                    />
                    <div className="buttons">
                        <CustomButton type="submit" value="Submit Form">Sign Up</CustomButton>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default SignUp;