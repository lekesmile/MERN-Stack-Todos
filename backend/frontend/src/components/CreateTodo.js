import React, { Component } from 'react'
import axios from 'axios'

class CreateTodo extends Component {
    state = {
        discription: '',
        responsible: '',
        priority: '',
        isCompleted: false
    }

    onChangeTodoHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        const newTodo = {
            discription: this.state.discription,
            responsible: this.state.responsible,
            priority: this.state.priority,
            isCompleted: this.state.isCompleted
        }

        axios.post('http://localhost:5000', newTodo)
            .then(res => console.log(res.data))

        this.props.history.push('/')

    }


    render() {
        return (
            <div className="container">
                <div className="jumbotron col-6 mx-auto">
                    <h3>Create New Todo</h3>
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <label htmlFor="discription">Discription</label>
                            <input type="text"
                                name="discription"
                                onChange={this.onChangeTodoHandler}
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="discription"
                                required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="responsible">Responsible</label>
                            <input type="text"
                                name="responsible"
                                onChange={this.onChangeTodoHandler}
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="responsiblity"
                                required
                            />
                        </div>

                        <label htmlFor="priority">Priority</label>
                        <div className="form-group">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input"
                                    type='radio'
                                    name="priority"
                                    id="priorityLow"
                                    value="Low"
                                    checked={this.state.priority === 'Low'}
                                    onChange={this.onChangeTodoHandler}
                                />
                                <label className="form-check-label">Low</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input"
                                    type='radio'
                                    name="priority"
                                    id="priorityLow"
                                    value="Medium"
                                    checked={this.state.priority === 'Medium'}
                                    onChange={this.onChangeTodoHandler}
                                />
                                <label className="form-check-label">Medium</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input"
                                    type="radio"
                                    name="priority"
                                    id="priorityHigh"
                                    value="High"
                                    checked={this.state.priority === 'High'}
                                    onChange={this.onChangeTodoHandler}
                                />
                                <label className="form-check-label">High</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-outline-primary btn-block">Add</button>

                    </form>
                </div>
            </div>
        )
    }
}

export default CreateTodo