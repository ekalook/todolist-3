import { Component } from "react";
import '../App.css'
import { RxCheck } from "react-icons/rx"
import { FiTrash } from "react-icons/fi"


class Todolist extends Component {
    // ვერ გავიგე რაუნდა გადავარენდერო, იქნებ გავიაროთ მეორე თვის მესამე კვირის მასალა
    
    constructor(props) {
        super(props)
        this.state = {
        todoList: [],
        completedTodos: [],
        newTodo: ''
    }
}


    addTodo = () => {
        if (this.state.newTodo.trim() !== '') {
            this.setState(prevState => ({
                todoList: [...prevState.todoList, this.state.newTodo],
                newTodo: ''
            }))
        }
    }

    removeTodo = (todoTask, todoindex) => {
        this.setState(prevState => ({
            [todoTask]: prevState[todoTask].filter((task, index) => index !== todoindex)
        }))
    }


    completeTodo = todoindex => {
        const completedTodo = this.state.todoList[todoindex]
        this.setState(prevState => ({
            todoList: prevState.todoList.filter((task, index) => index !== todoindex),
            completedTodos: [...prevState.completedTodos, completedTodo]
        }))
    }


    render() {
        return (
            <div className="todo-app">
                <div className="todos">
                    <h1>ToDo TITLE</h1>
                    <input type="text" placeholder="Enter Your Task"
                        value={this.state.newTodo} onChange={event => this.setState({ newTodo: event.target.value})}
                    />
                    <button onClick={this.addTodo}>ADD YOUR TASK</button>
                    <>
                        {this.state.todoList.map((task, index) => (
                            <li key={index}>
                             {task}
                                <FiTrash className="icon" onClick={() => this.removeTodo('todoList', index)} />
                                <RxCheck className="icon" onClick={() => this.completeTodo(index)} />
                            </li>
                        ))}
                    </>
                </div>
                <div className="doneTodo">
                    <h1>WELL DONE</h1>
                    <>
                        {this.state.completedTodos.map((task, index) => (
                                <li key={index}>
                                {task}
                                <FiTrash className="icon" onClick={() => this.removeTodo('completedTodos', index)} />
                            </li>
                        ))}
                    </>
                </div>
            </div>
        )
    }
}

export default Todolist