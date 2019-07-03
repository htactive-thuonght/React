import React, { Component } from 'react'
export default class LifeCycle extends Component {
  constructor(props) {
    super(props)
    console.log('couter contructor')
    this.state = { count:0 }
  }

  increase = () => {
       this.setState({
           count:this.state.count + 1
       })
  }

  decrease = () => {
    this.setState({
        count:this.state.count - 1
    })
 }
  render() {
      console.log('fbdhg')
    return (
     <div className="counter">
         <button className=" hiha btn btn-danger my-2 my-sm-0" onClick={() => this.decrease()}>-</button>
         <span>{this.state.count}</span>
         <button className=" hiha btn btn-danger my-2 my-sm-0" onClick={() => this.increase()}>+</button>
     </div>
    )
  }
  componentDidMount(){
      console.log('Couter Did Mount')
  }
  componentDidUpdate(){
    console.log('Couter Did Update')
    }
    componentWillUnmount(){
      console.log('Couter Will UnMount')
    }
}


