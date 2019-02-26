import React, {useContext} from 'react';
import ConfigurationContext from './../contexts/ConfigurationContext';
import languages from './../languages';

const Item = ({ image, title, details}) => {
    const context = useContext(ConfigurationContext);
    const {theme, lang} = context;
    return (
            <div className={`item ${theme}`}>
                <img src={image} alt=""/>
                <div className="text">
                    <h3>{title}</h3>
                    <p>
                        <strong>{languages[lang].details}</strong>
                        {details}</p>
                </div>
            </div>
    );
};

export default Item;