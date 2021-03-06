import React from 'react';
import './App.css';
import List from './components/List';
import data from './data';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import SearchBar from './components/SearchBar';
import uuid from 'uuid';
import Tabs from './components/Tabs';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      dataList: data,
      searchText:data,
      showAll:true,
      showComplete:false,
      showIncomplete:false
    }
  }
  //check item here
  handleChange= (id) =>{
    this.setState(prevState=>{
      const newList = prevState.searchText.map(item=>{
        if(item.id===id){
          return{
            ...item,
            complete:!item.complete
          }
          
        }
        return item;
      });
      return{
        dataList:newList,
        searchText: newList
        
      }
    });
     
  }
  //insert data here
  setData=(e)=>{
    const ENTER = 13;
    const newDataList={
      id:uuid.v4(),
      title:e.target.value,
      complete:false
    }
    if(e.keyCode===ENTER && e.target.value!==''){
      this.setState({
        dataList: [...this.state.dataList,newDataList],
        searchText:[...this.state.dataList,newDataList]
      });
      e.target.value = '';
    }
  }
  

  //search List
  searchList=(e)=>{
    const searchArr = this.state.dataList.filter(item => {
      return item.title.toLowerCase().includes(e.target.value.toLowerCase());  
    });
    this.setState({
      searchText:searchArr
    })
  }

  handleTabChange= (btnName) => {
    console.log("btn working");
    if(btnName==='showAll'){
      this.setState({
        showAll:true,
        showComplete:false,
        showIncomplete:false
      })
    }else if (btnName==='showComplete') {
      this.setState({
        showAll:false,
        showComplete:true,
        showIncomplete:false
      })
    }else if (btnName==='showIncomplete') {
      this.setState({
        showAll:false,
        showComplete:false,
        showIncomplete:true
      })
    } 
  }

  render(){
    const listComponent = this.state.searchText.map(item=>{
      if(this.state.showAll){
        return(
          <List key={item.id} item={item} changeFunction = {this.handleChange}/>
        )
      }
      if(this.state.showComplete){
        if(item.complete){
          return(
            <List key={item.id} item={item} changeFunction = {this.handleChange}/>
          )
        }
        
      }
      if(this.state.showIncomplete){
        if(item.complete===false){
          return(
            <List key={item.id} item={item} changeFunction = {this.handleChange}/>
          )
        }
        
      }
      
    });
    return (
    <div className="App">
      <div className="header">
        <Header/>
        <div className="tab-wrapper">
          <Tabs name="showAll" handleTabChange={this.handleTabChange} title={"show all"}/>
          <Tabs name="showComplete" handleTabChange={this.handleTabChange} title={"show Complete"}/>
          <Tabs name="showIncomplete" handleTabChange={this.handleTabChange} title={"show Incomplete"}/>
      </div>
        
      </div>
     
      <SearchBar search={this.searchList}/>
      <AddTodo insertData = {this.setData}/>
      {listComponent}
      
    </div>
  );}
}

export default App;
