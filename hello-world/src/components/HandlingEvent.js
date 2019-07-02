import React, { Component } from 'react';
export default class HandlingEvent extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
    }
    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
        alert('Have a nice day!')
    }

    render() {
        const title = this.state.isToggleOn ? 'ON' : 'OFF';
        return (
            <button className="btn btn-hhh btn-success my-2 my-sm-0" onClick={this.handleClick}>
                {title}
            </button>
        );
    }
}

