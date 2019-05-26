import React from 'react';
import './Searchbox.css';
import {fontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
 
class SearchBox extends Component {
    render(){
        return (
            <div className='SearchBox'>
                <FontAwesomeIcon icon={faSearch}/>
                <input placeholder="Search term"/>
            </div>
        )
    }
}

export default SearchBox;