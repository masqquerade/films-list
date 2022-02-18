import React from 'react';

import { Wrapper } from './styles/index';

interface ISortSwitcher {
    setSortMethod: React.Dispatch<React.SetStateAction<boolean>>
};

const SortSwitcher: React.FC<ISortSwitcher> = ({ setSortMethod }) => {
    return (
        <Wrapper>
            <span
                onClick={() => setSortMethod(false)}
            >От болшего </span>
            /
            <span
                onClick={() => setSortMethod(true)}
            > От меньшего</span>
        </Wrapper>
    );
};

export default SortSwitcher;