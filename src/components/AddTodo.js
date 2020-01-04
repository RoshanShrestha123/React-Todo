import React from "react";

class AddTodo extends React.Component{
    render(){

        return(
            <div className="add-todo-wrapper">
            <input type="text" placeholder="Add Todo item" className="input-field" onKeyDown = {(e)=>this.props.insertData(e)}></input>

            </div>
        )
    }
}
export default AddTodo;