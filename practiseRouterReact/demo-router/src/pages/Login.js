import React from "react";
class Login extends React.Component {
  render() {
    return (
      <>
         <div>
        <form className="form-login" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Your name</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Your Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your address"
            />
          </div>
          <input type="submit" className="btn btn-primary" value="ADD" />
        </form>
      </div>
      </>
    );
  }
}

export default Login;
