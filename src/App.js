import React, {Component} from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilerableList/FilterableList';
  

class App extends Component {
    render(){
        return (
            <div className='App'>
                <SearchBar/>
                <FilterableList files={this.props.files}/>
            </div>
        );
    }
}
export default App;