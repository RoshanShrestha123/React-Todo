import React from "react";
import editImg from "../edit.png";
import calendar from "../calendar.png";

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
            <div className={"list "+this.status} >
                <div className="listCollection">
                    <div className="list-detail">
                        <input 
                            className="checkBox"
                            onChange={(e)=>this.props.changeFunction(this.props.item.id)}
                            type="checkbox" checked={this.props.item.complete}>
                        </input>
                        <span className={"listDetail"+this.status}>{this.props.item.title}</span>
                        
                    </div>
                    <div className="icon"> 
                    <img src={calendar}></img>
                    </div>
                    

                </div>
                
            </div>
        )
    }
}
export default List