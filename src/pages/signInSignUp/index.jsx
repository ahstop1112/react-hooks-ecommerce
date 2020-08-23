import React from 'react';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import { SigninAndSignUpContainer } from './style';


const SignInSignUpPage = () => {
    return ( 
        <SigninAndSignUpContainer>
            <SignIn />
            <SignUp />
        </SigninAndSignUpContainer> 
    );
}
 
export default SignInSignUpPage;