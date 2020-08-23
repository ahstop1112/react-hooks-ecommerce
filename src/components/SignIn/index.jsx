import React, { Component } from 'react';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import { auth, signInWithGoogle } from '../../firebase/utils';
import { SignInContainer, Title, Buttons } from './style';

class SignIn extends Component {
    constructor(){
        super();
        this.state ={
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        }catch (error){
            console.log(error);
        }
        
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name] : value});
    }

    render() { 
        return ( 
            <SignInContainer>
                <Title>I already have an account </Title>
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
                    <Buttons>
                        <CustomButton type="submit" value="Submit Form">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </Buttons>
                </form>
            </SignInContainer>
         );
    }
}
 
export default SignIn;