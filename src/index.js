import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY='AIzaSyA7V09MtA4XmnhyrPqoyEtHUbPw3l_Dxco';

const App = () => {
    return (<div>
        <SearchBar />
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));