import React, { Component } from 'react';
import './App.css';
import  img from './images/log.jpg'
import  img1 from './images/baggage.jpg'
import  Logo from './Logo/Logo'
import  Logo1 from './Logo/Logo1'
class App extends Component {
  render() {
    return (
      <div className='header'>
      <div className="top">
      <img src={img} alt="" className="log"></img>
      <a href="javascript:;" className="sousuo"><i className="iconfont">&#xe607;</i></a>
      <img src={img1} alt="" className="baggage"></img>
      <span className="first"><a href="">登陆/</a></span>
      <span><a href="">注册</a></span>
    </div>
      </div>
    );
  }
}

export default App;
