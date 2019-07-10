import React,{Component} from "react";
import { BrowserRouter as Router,Route} from "react-router-dom";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Topic from "./pages/Topic";
import Login from "./pages/Login/Login";
// import Detail from "./pages/Detail";
class App extends Component {

  render() { 
    return ( 
      <Router>
      <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topic} />
        <Route path="/login" component={Login} />
        {/* <Route path="/detail" component={Detail} /> */}
        <Footer />
    </Router>
     );
  }
}
 
export default App;

