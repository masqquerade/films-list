import styled from 'styled-components';

export const FilmWrapper = styled.div`
    display: flex;
    width: 40vw;
    height: 35vh;
    background: #292929;
    border: 1px solid #383838;
`;

export const FilmItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 25vw;
    word-break: break-all;

    h2 {
        font-family: Montserrat;
        font-weight: bolder;
        color: white;
        margin: 1vh 0 0 1vw;
    };

    h4 {
        font-family: Montserrat;
        font-weight: 300;
        font-size: small;
        color: white;
        margin: 0.5vh 0 0 1vw;
    };
`;

export const FilmBtnWrapper = styled.div`
    display: flex;

    div {
        margin: 12vh 0 0 1vw;
    }
`