import React from 'react';

class Tabs extends React.Component{
    render(){
        return(
            <button className="tabs" onClick={()=> {this.props.handleTabChange(this.props.name)}}> {this.props.title} </button>
        )
    }
}

export default Tabs;