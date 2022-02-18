import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
    color: white;
    
    ::after {
        animation: changeContent .8s linear infinite;
        display: block;
        content: "⠋";
        font-size: 80px;
    };

    @keyframes changeContent {
        10% { content: "⠙"; }
        20% { content: "⠹"; }
        30% { content: "⠸"; }
        40% { content: "⠼"; }
        50% { content: "⠴"; }
        60% { content: "⠦"; }
        70% { content: "⠧"; }
        80% { content: "⠇"; }
        90% { content: "⠏"; }
    }
`;