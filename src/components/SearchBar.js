import React from 'react';

class SearchBar extends React.Component{
    constructor(){
        super();
        
    }
    render(){
        return(
            <div>
                <input className="search-bar" type="text" onKeyDown={(event)=>this.props.search(event)}></input>
            </div>
            
        )
    }
}
export default SearchBar;