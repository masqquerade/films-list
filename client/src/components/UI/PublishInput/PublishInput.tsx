import React from 'react';

import { PublishInputWrapper } from './styles';

interface IPublishForm {
    value: any;
};

const PublishInput: React.FC<IPublishForm> = ({ value }) => {
    return (
        <PublishInputWrapper 
            value={value!}
        />
    );
};

export default PublishInput;