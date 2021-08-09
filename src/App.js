import './App.css';
import { Component } from 'react';
import {CardList} from "./components/card-list/card-list";
import {SearchBox} from "./components/search-box/search-box";
class  App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchInput:""
    };
    // using arrow functions we dont need to bind the function to the class any more because the arrow function autmaticly bind to the place where it was called at the first place
    // this.handelChange = this.handelChange.bind(this);
  }
  componentDidMount () {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then( res => res.json())
    .then(users => this.setState({monsters:users}))

  };
  handelChange = e => {
    this.setState({searchInput: e.target.value});
  };
  render (){
    //destructuring
    const  {monsters,searchInput} = this.state;
    const filteredMonstres = monsters.filter(monster => monster.name.toLowerCase().includes(searchInput.toLowerCase()));
    return (
      
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder="find a monster" handelChange={this.handelChange}></SearchBox>
      <CardList monstores={filteredMonstres}></CardList>
    </div>
  );
  }
}

export default App;
