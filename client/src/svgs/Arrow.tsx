import React from 'react';

type TArrow = {
    type: string;
    height: string;
    width: string;
};

const Arrow: React.FC<TArrow> = ({ type, height, width }) => {
    return (
        type === 'right'
            ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ background: 'rgba(247, 242, 242, 1)' }}><path d="m19 12-7-6v5H6v2h6v5z"></path></svg>

            : <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ background: 'rgba(247, 242, 242, 1)' }}
            ><path
                d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"
            ></path></svg>
    );
};

export default Arrow;