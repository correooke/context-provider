import React from 'react';

const defaultValue = {
    theme: 'dark',
    lang: 'es',
    filter: { search: '' },
};

const ConfigurationContext = React.createContext(defaultValue);

export default ConfigurationContext;