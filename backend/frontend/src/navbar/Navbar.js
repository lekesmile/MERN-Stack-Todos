import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import TodoList from '../components/TodoList'
import EditTodo from '../components/EditTodo'
import CreateTodo from '../components/CreateTodo'
import DeleteTodo from '../components/DeleteTodo'
import logo from '../logo.png'


 class Navbar extends Component {
    render() {
        return (
            <Router>
                
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/" target="">
                            <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
                        </a>
                        <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
                        <div className="collpase navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/create" className="nav-link">Add to Todo</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <br />
                    <Route path="/" exact component={TodoList} />
                    <Route path="/edit/:id" component={EditTodo} />
                    <Route path="/delete/:id" component={DeleteTodo} />
                    <Route path="/create" component={CreateTodo} />
              
            </Router>
        )
    }
}
export default Navbar