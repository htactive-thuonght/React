import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

function App() {
  const data1={
    title: 'PNV',
    menu: ['Student','Teacher','Subject']
  }
  
  return (
    <>
      <Header data ={data1}/>
      <Content/>
      <Footer/>
    </> 
  );
}
export default App;
