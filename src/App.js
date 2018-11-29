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
    this.setState({todos:todos});
  }


  render() {
    return (
      <div>
        <Header />
        <AddToDo addtodo={this.handleAddToDo.bind(this)} />
        <AllToDos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
