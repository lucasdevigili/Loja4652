import styled from 'styled-components';
import colors from '../../themes/colors';

export const Contact = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&family=Source+Sans+Pro&display=swap');
height: 303px;
background-color: ${colors.darkBlue};
color: #ffffff;
display: flex;
align-items: center;
justify-content: center;

#contactContainer {
    width: 90%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between
}

#contactTitle h3 {
    font-family: Source Sans Pro;
    font-size: 36px;
    font-weight: 700;
}

#text{
    height: 60%;
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-between
}

#span, #p{
    display: flex;
    flex-direction: column;
    justify-content: space-between
}

#email, #instagram, #cellphone, .email, .instagram, .cellphone {
    font-family: Rubik;
    font-size: 24px;
    font-weight: 400;
    
}

`