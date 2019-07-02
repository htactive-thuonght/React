import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import ListsAndKeys from './components/ListsAndKeys';
import Footer from './components/Footer';
import './App.css';

const data1 = {
  title: 'PNV',
  menu: ['Student', 'Teacher', 'Subject']
}
const lists = [
  { id: 1, name: 'Hoang Thi Thuong' },
  { id: 2, name: 'Cao Thi Thuy' },
  { id: 3, name: 'Ngo Hong Nhung' },
  { id: 5, name: 'Hoang Thanh Vuong' }
]

function App() {
  return (
    <>
      <Header data={data1} />
      <Content />
      <ListsAndKeys lists={lists} />
      <Footer />
    </>
  );
}
export default App;
