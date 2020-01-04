import React from 'react';

class SearchBar extends React.Component{
    render(){
        return(
       
                <input className="search-bar" placeholder="Search.." type="text" onChange={(e)=>this.props.search(e)}></input>
           
            
        )
    }
}
export default SearchBar;