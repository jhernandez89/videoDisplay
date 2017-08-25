import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchBar';

const lame = require('../lame.js');

const API_KEY = lame.APIkey;

// Create a new component.  This component should produce
// some html.
const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

// Take this component's generated HTML and put it
// on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
