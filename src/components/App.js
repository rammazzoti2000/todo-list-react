import React from 'react';
import TodoItem from './TodoItem';
import todosData from '../data/todosData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    }
  }
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
