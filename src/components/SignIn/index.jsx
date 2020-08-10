import React, { Component } from 'react';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import { signInWithGoogle } from '../../firebase/utils';
import './style.scss';

class SignIn extends Component {
    constructor(){
        super();
        this.state ={
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        this.state({email: '', password: ''});
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name] : value});
    }

    render() { 
        return ( 
            <div className="sign-in">
                <h2 className="title">I already have an account </h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email"
                        label="Email"
                        onChange={this.handleChange} 
                        value={this.state.email} 
                        required 
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        label="Password"
                        onChange={this.handleChange} 
                        value={this.state.password} 
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit" value="Submit Form">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default SignIn;