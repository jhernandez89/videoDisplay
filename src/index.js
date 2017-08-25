import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchBar';

const lame = require('../lame.js');

const API_KEY = lame.APIkey;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { vieos: [] };

        YTSearch({  key: API_KEY, term: 'table top' }, (videos) => {
            this.setState({ videos });
        });
    }
    render() {
        return (
        <div>
            <SearchBar />
        </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
