import React from 'react';
import './SearchBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// "@fortawesome/fontawesome-svg-core": "^1.2.18",
// "@fortawesome/free-solid-svg-icons"
export default class SearchBox extends React.Component {
    render(){
        return (
            <div className='SearchBox'>
                <FontAwesomeIcon icon={faSearch}/>
                <input placeholder="Search term"/>
            </div>
        )
    }
}