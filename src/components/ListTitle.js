import React, { Component } from 'react';
import ConfigurationContext from './../contexts/ConfigurationContext';

class ListTitle extends Component {
    static configuration = ConfigurationContext;

    render() {
        const theme = this.context.theme;
        return (
            <h2 className={theme}>{this.props.title}</h2>
        );
    }
}

export default ListTitle;