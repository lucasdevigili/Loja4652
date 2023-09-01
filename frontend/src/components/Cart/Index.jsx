import styled from "styled-components";
import colors from '../../themes/colors';

export const CartContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&family=Source+Sans+Pro&display=swap');
    height: 100vh;
    background-color: ${colors.lightBlue};
    display: flex;
    align-items: center;
    justify-content: center;

    #cartContents {
        height: 90%;
        width: 90%;
    }

    #header {
        height: 20%;
        width: 65%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #back {
        width: 10%;
        text-align: center;
    }

    #components {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
    }

    #cards {
        height: 100%;
        width: 45%;
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

    #card {
        width: 100%;
    }

    .card {
        height: 126px;
        border-radius: 20px;
        background-color: white;
        padding-left: 10px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 10px;
    }

    #container {
        display: flex;
        height: 90%;
        width: 100%;
        align-items: center
    }

    #cardImg {
        height: 90%;
        width: 25%;
        display: flex;
    }

    #cardImg img {
        border-radius: 20px;
        height: 100%;
    }

    #cardItens {
        height: 90%;
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .cardTitle {
        font-family: Source Sans Pro;
        font-size: 30px;
    }

    #cardFunctions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: Rubik;
    }


    .price {
        font-size: 20px;
    }

    #cardCounter {
        display: flex;
        border: 1px solid black;
        border-radius: 15px;
    }

    .add, .remove {
        height: 25px;
        width: 40px;
        font-family: Rubik;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        cursor: pointer;
        background-color: transparent;
        border: none;
    }

    .amount p{
        height: 25px;
        width: 40px;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pagination button {
        width: 25px;
        height: 25px;
        border-radius: 50px;
        font-family: Source Sans Pro;
        font-size: 15px;
        font-weight: 700;
        cursor: pointer;
        border: none;
       
}

    .pagination button.active {
        background-color: #032B43;
        color: white;
    }
`