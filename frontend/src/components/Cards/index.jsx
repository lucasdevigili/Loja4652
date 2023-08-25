import styled from 'styled-components';
import colors from '../../themes/colors';

export const Cards = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&family=Source+Sans+Pro&display=swap');
    height: 513px;
    width: 310px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 40px;
    box-shadow: 0px 0px 10px 8px rgba(0, 0, 0, 0.25);

    #cardText {
        height: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    #cardImg, #cardPrice, #cardButton a {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a {
        text-decoration: none;
        color: ${colors.darkBlue};
        font-family: 'Rubik', sans-serif;
    }

    #cardImg {
        padding-top: 5px;
    }

    #price, .name {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .oldPrice {
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 700;
        font-size: 20px;
        color: ${colors.lightGrey};
        text-decoration: line-through 2px black;
    }


    .price {
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 700;
        font-size: 26px;

    }

    #price, .oldPrice, p{
        width: 70%;
    }

    #name {
        width: 60%;
    }

    .name {
        font-family: 'Rubik', sans-serif;
        font-size: 20px;
        width: 100%;
    }

    .cardButton {
        height: 6vh;
        width: 10vw;
        border-radius: 50px;
        border: 2px solid transparent;
        font-size: 20px;
        background-color: ${colors.yellow};
        cursor: pointer;
    }

    .cardButton:hover {
        border: 2px solid ${colors.darkBlue};
    }
`
