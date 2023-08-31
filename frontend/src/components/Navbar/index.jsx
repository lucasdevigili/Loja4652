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

#nav a{
    height: 30px;
    width: 70px;
    color: ${colors.lightBlack};
    font-size: 20px;
    background-color: transparent;
    border: none;
    text-decoration: none;
}

#nav a:hover {
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

#buttons .link{
    height: 6vh;
    width: 10vw;
    border-radius: 50px;
    border: transparent;
    font-size: 20px;
    color: ${colors.darkBlue};
    background-color: #f0f0f0;
    transition: 0.50s;
    text-decoration: none;
}

.link {
    display: flex;
    align-items: center;
    justify-content: center;
}

.icons{
    height: 5vh;
    border: transparent;
    font-size: 20px;
    color: #f0f0f0;
}

.icons:hover{
    color: ${colors.lightBlack};
}

#buttons .link:hover {
    color: white;
    background-color: ${colors.lightBlack};
    transition: 0.50s;
}
`