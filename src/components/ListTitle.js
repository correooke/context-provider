import React, { Component } from 'react';
import ConfigurationContext from './../contexts/ConfigurationContext';

class ListTitle extends Component {
    static contextType  = ConfigurationContext;

    render() {
        const theme = this.context.theme;
        console.log(theme)
        return (
            <h2 className={`list-title ${theme}`}>{this.props.title}</h2>
        );
    }
}
// Si no hace uso de la sintaxis de asignación de campos públicos
//ListTitle.contextType = ConfigurationContext;

export default ListTitle;