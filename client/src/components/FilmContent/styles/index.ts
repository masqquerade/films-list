import styled from 'styled-components';

export const ContentWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 60vh;
    align-items: center;

    img {
        height: 45vh;
        width: 15vw;
        margin-left: 3vw;
    };
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-left: 2vw;
    width: 30%;
    height: 45vh;

    h1 {
        font-family: Montserrat;
        color: white;
        font-size: 3vh;
    };

    h4 {
        font-family: Montserrat;
        color: #a6a6a6;
        font-weight: 300;
    };
`;