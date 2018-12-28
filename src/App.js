import React, {Component} from 'react';
import './App.css';
import data from './data';
import Search from './components/Search';
import List from './components/List';
import ConfigurationContext from './contexts/ConfigurationContext';
import Configuration from './components/Configuration';
import languages from './languages';

class App extends Component {

    state = {
        configurationContext: {
            theme: 'dark',
            lang: 'es',
            filter: {
                search: ''
            }
        },
        search: '',
        items: data
    }

    onChangeSearch = search => {
        const items = data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
        this.setState({items, search});
    }

    onChangeTheme = e => {
        this.setState({
            configurationContext: {
                ...this.state.configurationContext,
                theme: e.target.value
            }
        });
    }

    onChangeLang = e => {
        this.setState({
            configurationContext: {
                ...this.state.configurationContext,
                lang: e.target.value
            }
        });
    }

    render() {
        const {theme, lang} = this.state.configurationContext;

        return (
            <ConfigurationContext.Provider value={this.state.configurationContext}>
                <div className={`app ${theme}`}>
                    <div className="header">
                        <h1>{languages[lang].learnTitle}</h1>
                        <h2>Provider / Consumer</h2>
                    </div>
                    <Configuration
                        theme={theme}
                        lang={lang}
                        onChangeLang={this.onChangeLang}
                        onChangeTheme={this.onChangeTheme}/>

                    <Search search={this.state.search} onChangeSearch={this.onChangeSearch}/>
                    <h2 className="results">{languages[lang].results}</h2>
                    <List items={this.state.items}/>
                </div>
            </ConfigurationContext.Provider>
        );
    }
}

export default App;
