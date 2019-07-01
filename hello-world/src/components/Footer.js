import React, { Component } from 'react';
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
        <footer className="page-footer font-small bg-dark pt-4">
        <div className="container">
          <ul className="list-unstyled list-inline text-center py-2">
            <li className="list-inline-item">
              <h5 className="mb-1">Register for free</h5>
            </li>
            <li className="list-inline-item">
              <a href="#!" className="btn btn-light btn-rounded">Sign up!</a>
            </li>
          </ul>
        </div>
        <div className="footer-copyright text-center py-3">© 2018 Copyright:
          <a href="#" className="a"> MDBootstrap.com</a>
        </div>
      </footer>
    );
  }
}