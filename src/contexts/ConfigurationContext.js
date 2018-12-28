import React from 'react';

const ConfigurationContext = React.createContext({
    theme: 'dark',
    lang: 'es',
    filter: { search: '' },
});

export default ConfigurationContext;