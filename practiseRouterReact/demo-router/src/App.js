import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Topic from '../src/pages/Topic'
import Login from '../src/pages/Login/Login'
import Footer from '../src/components/Footer'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to= {{
              pathname: "/",
              state: [{ id:1, name : 'Cao Thi Thuy', age: 20, title: 'watching TV'}, { id:2, name : 'Nguyen P.Nhung', age: 20, title: 'MakeUp'}, { id:3, name : 'Nguyen My Trang', age: 23, title: 'Traveling'}, { id:4, name : 'Nguyen Thu Huong', age: 20, title: 'Gossiping'}, { id:5, name : 'Doan Thi Ly', age: 20, title: 'Typing'}, { id:6, name : 'Hoang Thi Thuong', age: 20, title: 'Sleep'}]
            }} className="link">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
           
            <li className="nav-item">
            <Link to="/about" className="link">About</Link>
            </li>
            <li className="nav-item">
            <Link to="/topics" className="link">Topics</Link>
            </li>
            <li className="nav-item">
            <Link to="/login" className="link">Login</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

    

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topic} />
        <Route path="/login" component={Login} />
      </div>
      <Footer/>
    </Router>
  );
}



export default App;
