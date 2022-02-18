import styled from 'styled-components';

export const CommentInputWrapper = styled.textarea`
    resize: none;
    height: 7vh;
    width: 20vw;
    background: #333333;
    color: white;
    font-family: Montserrat;
    outline: none;
    border: 1px solid #4d4d4d;

    ::-webkit-scrollbar {
        width: 5px;
        height: 8px;
    };

    ::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background: #1f1f1f;
    };
`;

export const Wrapper = styled.div`
    display: flex;

    .svg {
        display: flex;
        align-items: flex-end;
    }
`