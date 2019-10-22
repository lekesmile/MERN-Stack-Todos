import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class TodoList extends Component {
    state = {
        todos: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000')
            .then(res => {
                this.setState({
                    todos: res.data
                })
            })
            .catch(error => console.log(`Error fetch API ${error}`))
    }
   
    // componentWillUpdate(){
    //     axios.get('http://localhost:5000')
    //         .then(res => {
    //             this.setState({
    //                 todos: res.data
    //             })
    //         })
    //         .catch(error => console.log(`Error fetch API ${error}`))
    // }

   
    render() {
        let { todos } = this.state
        return (
            <div className="container">
                <p>Welcome to Todo List Component</p>
                <div className="row">
                {todos.map(todo => (
                    <div className="card border-dark m-3 px-0 col-lg-4" style={{maxWidth:"18rem"}} key={todo._id} >
                        <div className="card-header">Todo</div>
                        <div className="card-body text-dark">
                            {/* {todo.isCompleted ? 'completed' : '' + "card-title"} */}
                            <h5 className="card-title"  >Title: {todo.discription}</h5>
                            <p className="card-text">Info: {todo.responsible}</p>
                            <p className="card-text">Priority: {todo.priority}</p>
                            <p className="card-text">isCompleted: {todo.isCompleted}</p>

                        </div>
                        
                            <Link to={"/edit/" + todo._id} className="btn btn-outline-info my-1">Edit</Link>
                            <Link to={"/delete/" + todo._id} className="btn btn-outline-danger ">Delete</Link>
                   
                    </div>
                ))}
            </div>
            </div>
        )
    }
}

export default TodoList