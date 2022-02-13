import styled from 'styled-components';

export const FilmWrapper = styled.div<{ margin: string }>`
    display: flex;
    margin: ${props => props.margin };
    width: 40vw;
    height: 35vh;
    background: #292929;
    border: 1px solid #383838;
    margin-top: 1vh;
`;

export const FilmItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 25vw;
    word-break: break-all;
`;

export const FilmTextWrapper = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    
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
`

export const FilmBtnWrapper = styled.div`
    display: flex;
    margin-left: 1vw;
    margin-bottom: 1vh;
`;