import styled from "styled-components"
import colors from "../../themes/colors"

export const SignUpContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&family=Source+Sans+Pro&display=swap');
    height: 100vh;
    background-color: ${colors.lightBlue};
    display: flex;
    justify-content: center;
    align-items: center;
    
    #modal {
        height: 85%;
        width: 53%;
        background-color: white;
        border-radius: 75px;
        display: flex;
        justify-content: center;
        box-shadow: 0px 0px 7px 9px rgba(0, 0, 0, 0.30);

    }

    #modalContainer {
        width: 85%;
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
        letter-spacing: 5.2px;
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
    #formLineThree,
    #formLineFour {
        display: flex;
        justify-content: space-between;
    }

    #name,
    #surname,
    #cpf,
    #date,
    #email,
    #cellphone,
    #password,
    #confirm {
        display: flex;
        flex-direction: column;
    }

    .input {
        width: 290px;
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

    #buttons button, a{
        height: 6vh;
        width: 16vw;
        border-radius: 50px;
        border: 2px solid #000;
        color: ${colors.darkBlue};
        font-size: 20px;
        font-family: Rubik;
        transition: 0.50s;
        text-decoration: none;
        cursor: pointer;
    }

    #buttons button, a{
        display: flex;
        align-items: center;
        justify-content: center;
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