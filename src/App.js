import React from 'react';
import './App.css';
import List from './components/List';
import data from './data';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import SearchBar from './components/SearchBar';
import uuid from 'uuid';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      dataList: data
    }
    this.handleChange = this.handleChange.bind(this);
    this.setData = this.setData.bind(this);
    this.searchList = this.searchList.bind(this);
    
  }
  //check item here
  handleChange(id){
    this.setState(prevState=>{
      const newList = prevState.dataList.map(item=>{
        if(item.id===id){
          return{
            ...item,
            complete:!item.complete

          }
          
        }
        return item;
      });
      return{
        dataList: newList
      }
    });
     
  }
  //insert data here
  setData(e){
    const ENTER = 13;
    const newDataList={
      id:uuid.v4(),
      title:e.target.value,
      complete:false
    }
    if(e.keyCode===ENTER && e.target.value!=''){
      this.setState({
        dataList: [...this.state.dataList,newDataList]
      });
      e.target.value = '';
    }
  }

  //search List
  searchList(e){
    this.setState((prevState)=>{
      
    });
  }
  render(){
    const listComponent = this.state.dataList.map(item=>{
      return(
        <List key={item.id} item={item} changeFunction = {this.handleChange}/>
      )
    });
    return (
    <div className="App">
      <Header/>
      <SearchBar search={this.searchList}/>
      
      {listComponent}
      <AddTodo insertData = {this.setData}/>
    </div>
  );}
}

export default App;
