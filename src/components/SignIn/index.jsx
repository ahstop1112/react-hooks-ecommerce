import React, { useEffect, useState } from 'react';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import { auth, signInWithGoogle } from '../../firebase/utils';
import './style.scss';

const SignIn = () => {

    const [userCredentials, setUserCredentials] = useState({email: '', password: ''})

    const handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            setUserCredentials({email: '', password: ''});
        }catch (error){
            console.log(error);
        }
        
    }

    const handleChange = async event => {
        const { value, name } = event.target;
        setUserCredentials({[name] : value});
    }

    return ( 
        <div className="sign-in">
            <h2 className="title">I already have an account </h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    name="email" 
                    type="email"
                    label="Email"
                    onChange={handleChange} 
                    value={userCredentials.email} 
                    required 
                />
                <FormInput 
                    name="password" 
                    type="password" 
                    label="Password"
                    onChange={handleChange} 
                    value={userCredentials.password} 
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
 
export default SignIn;