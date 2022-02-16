import styled from 'styled-components';

export const FilmWrapper = styled.div<{ margin: string }>`
    margin: ${props => props.margin};

    img {
        border-left: 2px solid #2b6fc2;
        height: 31vh;
        width: 11.2vw;
    }
`;

export const FilmTextWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    flex-direction: column;
    
    h3 {
        font-family: Montserrat;
        font-size: small;
        color: white;
        margin-top: 1vh;
    };

    h4 {
        font-family: Montserrat;
        font-weight: 300;
        font-size: small;
        color: #9e9e9e;
    };
`

export const FilmBtnWrapper = styled.div`
    display: flex;
    margin-left: 1vw;
    margin-bottom: 1vh;
`;