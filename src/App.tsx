import React, { useState, FC, ChangeEvent } from 'react'
import './todoList.css'
import {Task} from "./interfaces"
import {TodoTask} from "./components/TodoTask"

const App: FC = () => {

  const [task, setTask] = useState<string>("")
  const [todoList, setTodoList] = useState<Task[]>([])


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  }

  const addTask = (): void => {
    const newTask = {taskName: task}
    setTodoList([...todoList, newTask])
    setTask("")
  }

  const completeTask = (taskNameToComplete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName != taskNameToComplete
    }))
  }

  return (
    <div className='app'>
      <div className="header">
          <input type="text" placeholder='Task name' name = "task" onChange={handleChange} value = { task }/>
          <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
      {todoList.map((task: Task, key: number) => {
        return <TodoTask key={key} task = {task} completeTask={completeTask}/>
      })}
      </div>
    </div>
  );
};

export default App;
