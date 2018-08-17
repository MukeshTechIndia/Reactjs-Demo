import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello.js';
import Clock from './components/Clock.js';
import ClockWithState from './components/ClockWithState.js';
import TodoListItem from './components/TodoListItem.js';
import TodoForm from './components/TodoForm.js';
class App extends Component {
  constructor(){
    super();
    this.changeStatus = this.changeStatus.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);        
    this.state={
        first_name:"Mukesh",
        last_name:"Ranjan",
        names:["Mukesh","Rakesh","Pankaj","Dinesh"],
        tasks:[{name:"Buy Milks",completed:false},
               {name:"Buy Cheese",completed:false},
               {name:"Buy Breads",completed:false}
              ],
        currentTask:'',
        users:[]      
    }
}

changeStatus(index){
  console.log(this.state.tasks[index]);
  var tasks = this.state.tasks;
  var task = tasks[index];
  task.completed = !task.completed;
  this.setState({
      tasks:tasks
  }) 
}
editTask(index,newValue){
  var tasks = this.state.tasks;
  var task = tasks[index];
  task['name']=newValue;
  this.setState({tasks:tasks}) 
}
updateTask(newValue){
  this.setState({currentTask:newValue.target.value})
}
addTask(e){
  e.preventDefault();
  let tasks = this.state.tasks;
  let currentTask = this.state.currentTask;
  tasks.push({
      name:currentTask,
      completed:false
  })
  this.setState({
      tasks:tasks,currentTask:''
  })
}
deleteTask(index){
  let tasks = this.state.tasks;
  tasks.splice(index,1)
  this.setState({
      tasks
  })
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p><u>Prop Example</u></p>
        <Hello name="Mukesh" age="20"/>
        <Hello name="Ramesh"/>
        <Hello name="Sheroes"/>
        <p><u>Components without State Example</u></p>
        <Clock />
        <p><u>Components with State Example</u></p>        
        <ClockWithState />
        <p><u>Components with TODO  Example</u></p>        
        <TodoForm currentTask={this.state.currentTask}
                    updateTask={this.updateTask}
                    addTask={this.addTask}/>
          <ul>
              {this.state.tasks.map((task,index) => {
                  return <TodoListItem key={index} index={index}
                                    deleteTask={this.deleteTask}
                                    clickHandler={this.changeStatus} 
                                    deleteTask={this.deleteTask}
                                    editTask={this.editTask}
                                    details={task}/>
                                
                    }
                    )}
          </ul>            
      </div>
    );
  }
}

export default App;
