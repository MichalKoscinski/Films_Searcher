import React from 'react';
import Helmet from 'react-helmet';

const TitleComponent = ({ title }) => {
    const defaultTitle = 'app';
    return (
        <Helmet>
            <title>{title ? title : defaultTitle}</title>
        </Helmet>
    );
};

export { TitleComponent };