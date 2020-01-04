import React from "react";

class List extends React.Component{
    constructor(){
        super();
        this.status = "unchecked";
    }
    render(){
        if(this.props.item.complete===true){
            this.status="checked";
        }else{
            this.status="unchecked";
        }
        return(
            <div className="list">
                <div className="tag"></div>
                <div className="listCollection">
                    <span className={"listDetail"+this.status}>{this.props.item.title}</span>
                    <input 
                    className="checkBox right" 
                    type="checkbox" checked={this.props.item.complete} 
                    onChange={(e)=>this.props.changeFunction(this.props.item.id)}>
                    </input>
                </div>
                
            </div>
        )
    }
}
export default List