import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import ListsAndKeys from './components/ListsAndKeys'
import LifeCycle from './components/LifeCycle'
import Footer from './components/Footer'
import HandlingEvent from './components/HandlingEvent'
import './App.css'


const dataMenu ={
  title: 'PNV',
  menu: ['Student', 'Teacher', 'Subject']
}
const listsStudent = [
  { id: 1, name: 'Hoang Thi Thuong' },
  { id: 2, name: 'Cao Thi Thuy' },
  { id: 3, name: 'Ngo Hong Nhung' },
  { id: 5, name: 'Hoang Thanh Vuong' }
]
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    data: dataMenu,
    lists: listsStudent
   }
  }
  render() {
  return (
    
    <>
      <Header data={this.state.data} />
      <Content />
      <ListsAndKeys lists={this.state.lists} />
      <HandlingEvent/>
      <LifeCycle/>
      <Footer />
    </>
  )
    }
}

