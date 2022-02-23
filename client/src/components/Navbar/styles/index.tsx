import styled from 'styled-components';

export const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 7vh;
    background: #2b2b2b;
`;

export const NavbarContent = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 10vw;
    width: 100vw;

    a {
        color: white;
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
    }
`;