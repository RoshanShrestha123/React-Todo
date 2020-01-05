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
      dataList: data,
      searchText:data
    }
  }
  //check item here
  handleChange= (id) =>{
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
  setData=(e)=>{
    console.log(e.target.value);
    const ENTER = 13;
    const newDataList={
      id:uuid.v4(),
      title:e.target.value,
      complete:false
    }
    if(e.keyCode===ENTER && e.target.value!==''){
      this.setState({
        dataList: [...this.state.dataList,newDataList]
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

  render(){
    const listComponent = this.state.searchText.map(item=>{
      return(
        <List key={item.id} item={item} changeFunction = {this.handleChange}/>
      )
    });
    console.log(listComponent);
    return (
    <div className="App">
      <Header/>
      <SearchBar search={this.searchList}/>
      <AddTodo insertData = {this.setData}/>
      {listComponent}
      
    </div>
  );}
}

export default App;
