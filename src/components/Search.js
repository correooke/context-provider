import React from 'react';
import ConfigurationContext from './../contexts/ConfigurationContext';
import languages from './../languages/index';

const Search = ({search, onChangeSearch}) => {

    return (
        <ConfigurationContext.Consumer>
            {({theme, lang}) => (
                <div className={`search ${theme}`}>
                    <span>{languages[lang].search}</span>
                    <input
                        type="text"
                        value={search}
                        onChange={e => {
                        const {value} = e.target;
                        onChangeSearch(value);
                    }}/>
                </div>
            )
}
        </ConfigurationContext.Consumer>
    );
};

export default Search;