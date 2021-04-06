import React from 'react';
import './components/Todo.scss';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
const todo = [
  {
    task: 'Learn react class components',
    completed: false,
    id: Date.now()
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todo
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addTask = (taskName) => {
    this.setState({
    todo: [...this.state.todo, {
      task: taskName,
      completed:false,
      id: Date.now()
      }]  
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todo}/>
        <TodoForm addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
