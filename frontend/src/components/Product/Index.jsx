import styled from "styled-components";
import colors from "../../themes/colors";

export const Container = styled.div`
     @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&family=Source+Sans+Pro&display=swap');
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

  #container {
    height: 90%;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #img {
    height: 100%;
    width: 40%;
  }

  #contents {
    height: 100%;
    width: 50%;
    display:flex;
    flex-direction: column;
  }

  #rightColumn {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #sectionUp {
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #sectionMidlle {
    height: 20%;
    border-top: 3px solid #0000007f;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  #sectionDown {
    height: 50%;
    display: flex;
    flex-direction: column;
  }

  .title {
    font-family: Rubik;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    text-transform: uppercase;
  }

  .oldPrice {
    color: #0000007f;
    font-family: Source Sans Pro;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    text-decoration: line-through 3px black;
  }

  .price {
    font-family: Source Sans Pro;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
  }

  // sizes

  #selects {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  #counter {
    display: flex;
    border: 1px solid black;
  }


  .add, .remove {
    height: 45px;
    width: 50px;
    font-family: Rubik;
    font-size: 33px;
    font-style: normal;
    font-weight: 400;
    cursor: pointer;
    background-color: transparent;
    border: none;

 }

 .amount p{
    height: 45px;
    width: 50px;

    font-family: Rubik;
    font-size: 33px;
    font-style: normal;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
 }

 .button {
    height: 6vh;
    width: 15vw;
    border-radius: 50px;
    border: transparent;
    font-size: 20px;
    background-color: ${colors.yellow};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-family: Rubik;
    color: black;
 }

 .button:hover {
        border: 2px solid ${colors.darkBlue};
    }
    
    #description {
      height: 100%;
    }

    .description {
      text-align: justify;
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
    }


`