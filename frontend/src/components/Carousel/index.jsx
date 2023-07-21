import styled from 'styled-components';
import colors from '../../themes/colors';

export const Carousel = styled.div`
    height: 80vh;
    background-color: ${colors.lightBlue};
    display: flex;
    justify-content: center;

    #carrousel{
        height: 100%;
        display: flex;
        align-items: center;
    }

    #carrouselImg{
        height: 90%;
        width: 90%;
    }
`