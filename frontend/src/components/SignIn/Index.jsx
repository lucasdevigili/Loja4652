import styled from "styled-components"
import colors from "../../themes/colors"

export const SignInContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&family=Source+Sans+Pro&display=swap');
    height: 100vh;
    background-color: ${colors.lightBlue};
    display: flex;
    justify-content: center;
    align-items: center;

    #modal {
        height: 85%;
        width: 43%;
        background-color: white;
        color: #000000;
        border-radius: 75px;
        display: flex;
        justify-content: center;
        box-shadow: 0px 0px 7px 9px rgba(0, 0, 0, 0.30);

    }

    #modalContainer {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center
    }

    #title {
        text-align: center;
    }

    .title {
        font-family: Source Sans Pro;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 3.2px;
    }

    #form {
        width: 100%;
        display: flex;
        flex-direction: column
    }

    .inputContainer {
        margin-bottom: 20px;
        min-height: 60px; 
        position: relative;
}

    #formLineOne,
    #formLineTwo,
    #formLineFour {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #formLineThree {
        display: flex;
        justify-content: flex-end
    }

    .input {
        width: 100%;
        height: 48px;
        border-radius: 10px;
        border: 2px solid #A3A3A3;
        font-size: 20px;
        font-family: Rubik;
        padding-left: 10px;
    }


    .label {
        font-family: Rubik;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        letter-spacing: 3.12px;
    }

    .span {
        color: ${colors.red};
        font-family: Rubik;
        font-size: 13px;
        font-style: italic;
        font-weight: 400;
        letter-spacing: 1.69px;
    }

    #buttons {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    a {
        text-decoration: none;
        color: currentColor;
        font-family: Rubik;
    }

    #formLineFour span {
        font-family: Rubik;
    }

    .signUpSpan {
        color: #0000ff;
    }

    #buttons button, .cancel{
        height: 6vh;
        width: 13vw;
        border-radius: 50px;
        border: 2px solid #000;
        color: ${colors.darkBlue};
        font-size: 20px;
        font-family: Rubik;
        transition: 0.50s;
        text-decoration: none;
        cursor: pointer;
    }

    #buttons, .cancel {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    .confirm { 
        background-color: ${colors.lightGreen};
    }

    .confirm:hover {
        color: white;
        background-color: #02ff02a9;
    }

    .cancel:hover {
        color: white;
        background-color: ${colors.red};
    }
`