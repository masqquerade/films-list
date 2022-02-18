import styled from 'styled-components';

export const ReviewWrapper = styled.div`
    font-family: Montserrat;
    width: 20vw;
    min-height: 6vh;
    border-radius: 3px;
    background: #2b2b2b;
    margin-top: 0.5vh;
`;

export const LabelTextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.3vh 0 0 0.3vw;

    h3 {
        font-size: small;
        color: white;
    };
`;

export const BottomTextWrapper = styled.div`
        h4 {
        font-size: 0.6vw;
        font-weight: 400;
        color: #a6a6a6;
        padding: 0.2vh 0 0.2vh 0.3vw;
    };
`;

export const StarsWrapper = styled.div`
    display: flex;
`;