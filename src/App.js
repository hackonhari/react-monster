import React, {Component}  from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search.component.jsx';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      monsters:[],
      searchField:""
    }
  };

  handleChange=(e)=>{
    this.setState({searchField:e.target.value}); //this refers to the App component, because it owns the method in arrow functions.
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>{
      this.setState({monsters:users});
    })
  }
  render(){
    const {monsters,searchField}=this.state;
    const filteredMonsters=monsters.filter(monster=>(
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ))
    return (
        <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}>
        </CardList> 
        </div>
    );
  }
}
export default App;
