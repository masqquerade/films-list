import styled from 'styled-components';

export const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 7vh;
    background: #2b2b2b;
`;

export const NavbarContent = styled.div`
    display: flex;
    justify-content: space-around;
    width: 60vw;

    a {
        color: white;
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
    }
`;