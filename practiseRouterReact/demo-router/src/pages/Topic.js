import React,{Component} from "react";
import { Route, Link } from "react-router-dom";
class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
      return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`/components`}>Components</Link>
          </li>
          <li>
            <Link to={`/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
        <Route exact render={() => <h3>Please select a topic.</h3>} />
      </div>
    );
  }
}
export default Topic;
