import React, { Component } from 'react'
import axios from 'axios'

class EditTodo extends Component {
    state={
        discription: '',
        responsible: '',
        priority: '',
        isCompleted: false
    }

    onChangeTodoHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }


    componentDidMount(){
        axios.get("http://localhost:5000/" + this.props.match.params.id)
        .then(res =>{
            console.log(res)
            this.setState({
                discription: res.data.discription,
                responsible: res.data.responsible,
                priority: res.data.priority,
                isCompleted: res.data.isCompleted 
            })
        }) 
           .catch(error => console.log(`Error fetch API ${error}`))
    }


     onSubmit = (e) => {
        e.preventDefault();
        const updatedTodo = {
            discription: this.state.discription,
            responsible: this.state.responsible,
            priority: this.state.priority,
            isCompleted: false
        }

        axios.put("http://localhost:5000/"  + this.props.match.params.id, updatedTodo)
         
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
      this.props.history.push('/')
    }

    render() {
        
        return (
            <div className="container">
                <h3>Edit todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="discription">Discription</label>
                        <input type="text" value={this.state.discription} name="discription" onChange={this.onChangeTodoHandler} className="form-control" id="exampleFormControlInput1" placeholder="discription" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="responsible">Responsible</label>
                        <input type="text" value={this.state.responsible} name="responsible" onChange={this.onChangeTodoHandler} className="form-control" id="exampleFormControlInput1" placeholder="responsiblity" />
                    </div>

                    <label htmlFor="priority">Priority</label>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type='radio' name="priority" id="priorityLow"
                                value={this.state.priority} checked={this.state.priority === 'Low'} onChange={this.onChangeTodoHandler} />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type='radio' name="priority" id="priorityLow"
                                value={this.state.priority} checked={this.state.priority === 'Medium'} onChange={this.onChangeTodoHandler} />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="priority" id="priorityHigh"
                                value={this.state.priority} checked={this.state.priority === 'High'} onChange={this.onChangeTodoHandler} />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary ">Update</button>
                    
                </form>
            </div>
        )
    }

}

export default EditTodo