import React, { Component } from 'react';
import Header from './Components/Header';
import AddToDo from './Components/AddToDo';
import AllToDos from './Components/AllToDos';


class App extends Component {

  constructor(){
    super();
    this.state = {
      todos:[]
    }
  }

  handleAddToDo(todo){
    let todos = this.state.todos;
    todos.push(todo);
    console.log(todos);
    this.setState({todos:todos});
  }


  render() {
    return (
      <div>
        <Header />
        <AddToDo addtodo={this.handleAddToDo.bind(this)} />
        <AllToDos />
      </div>
    );
  }
}

export default App;
