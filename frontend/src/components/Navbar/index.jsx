import styled from "styled-components"
import colors from "../../themes/colors"

export const Navbar = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&family=Source+Sans+Pro&display=swap');
    height: 20vh;
    background-color: #032B43;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Rubik', serif;


#logo, #nav, #buttons {
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#logo {
    font-size: 20px;
    font-weight: bold;
}

#nav {
    width: 30%;
    display: flex;
    justify-content: space-between;
}

.dash {
    border-right: 1px solid ${colors.lightBlack}
}

#nav button {
    height: 30px;
    width: 70px;
    color: ${colors.lightBlack};
    font-size: 20px;
    background-color: transparent;
    border: none;
}

#nav button:hover {
    color: white;
}

#nav li{
    list-style-type: none;
    padding: 0px 25px 0px 25px;
}

#nav ul li {
    display: inline-block;
}

#buttons {
    display: flex;
    justify-content: space-evenly
}

#buttons button {
    height: 6vh;
    width: 10vw;
    border-radius: 50px;
    border: transparent;
    font-size: 20px;
    color: ${colors.darkBlue};
    transition: 0.50s;
}

#buttons button:hover {
    color: white;
    background-color: ${colors.lightBlack};
    transition: 0.50s;
}
`