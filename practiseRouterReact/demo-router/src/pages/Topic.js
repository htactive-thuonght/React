import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Topic = () => {
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
      <Route
        exact
        // path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  )
}

export default Topic
