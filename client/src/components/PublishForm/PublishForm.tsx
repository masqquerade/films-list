import React from 'react';

interface IPublishForm {
    value: {
        title: string;
        body: string;
        logo: File;
        iviLink: string;
        trailerLink: string;
        rating: number;
        realeseDate: number;
    };
};

const PublishForm: React.FC<IPublishForm> = ({ value }) => {
    return (
        <div>

        </div>
    );
};

export default PublishForm;