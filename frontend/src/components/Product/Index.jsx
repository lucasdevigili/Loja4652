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
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #left {
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-between
  }

  #images {
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  
  #principal {
    display: flex;
  }

  #secundary {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between
  }

  #contents {
    height: 100%;
    width: 35%;
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

  #size {
    display: flex;
    gap: 10px;
  }

  #selects {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  #selectContents {
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center
  }

  #counter {
    height: 80%;
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

    font-family: Rubik;
    font-size: 20px;
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
    border: 2px solid transparent;
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
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
    }


`