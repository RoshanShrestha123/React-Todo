import React from 'react';

class Tabs extends React.Component{
    render(){
        return(
            <button className="tabs"> {this.props.name} </button>
        )
    }
}

export default Tabs;