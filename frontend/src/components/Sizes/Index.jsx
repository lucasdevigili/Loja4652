import styled from "styled-components";
import colors from "../../themes/colors";

export const Size = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&family=Source+Sans+Pro&display=swap');

    #size {
                display: flex;
    }

    .size {
        width: 30px;
        height: 30px;
        border-radius: 50px;
        background: ${colors.lightGreen};
        border: none;
        display:  flex;
        justify-content: center;
        align-items: center;
        font-family: Source Sans Pro;
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
    }

    .size.selected {
  background-color: ${colors.darkBlue};
  color: white;
}

`