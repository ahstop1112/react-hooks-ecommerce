import styled, { css } from 'styled-components';

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const invertButtonStyles = css`
    background-color: #fff;
    color: #000;
    border: none;

    &:hover{
        cursor: pointer;
        background-color: #000;
        color: #fff;
        border: none;
    }
`;

const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;
    border: none;

    &:hover {
    background-color: #357ae8;
    border: none;
    }
`;

const getButtonStyles = props => {

    console.log(props);
    if (props.isGoogleSignIn){
        return googleSignInStyles;
    }

    return props.inverted ? invertButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;