import React from 'react';
import languages from '../languages';

const Configuration = ({theme, onChangeTheme, lang, onChangeLang}) => {
    return (
        <div className="configuration">
            <div>
                <span>{languages[lang].theme}</span>
                <select onChange={onChangeTheme}>
                    <option value="dark">{languages[lang].dark}</option>
                    <option value="light">{languages[lang].light}</option>
                </select>
                <span>{languages[lang].selectedTheme}{theme}
                </span>
            </div>
            <div>
                <span>{languages[lang].language}</span>
                <select onChange={onChangeLang}>
                    <option value="es">{languages[lang].es}</option>
                    <option value="en">{languages[lang].en}</option>
                </select>
                <span>{languages[lang].selectedLanguage}{lang}
                </span>
            </div>
        </div>
    );
};

export default Configuration;