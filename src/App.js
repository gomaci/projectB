import React from 'react';
import './App.css';
import {Link, Route} from "react-router-dom"
//yarn add react-router-dom@5
//yarn add styled-components

import Home from './component/home';
import Sub1 from './component/sub1';
import Sub2 from './component/sub2';
import Sub3 from './component/sub3';
import Sub4 from './component/sub4';

function App() {
  return (
    <div className='wrap'>
      <header className='header'>
        <div>
            <h1 className='logo'><Link to="/">
              <img src={process.env.PUBLIC_URL+"/images/로고.이미지확장"}/>
              </Link></h1>
            <nav className='nav'>
              <ul>
                <li style={{textDecoration:'none'}}><Link to="/component/sub1">서브1</Link></li>
                <li className='mn'><Link to="/component/sub2">서브2</Link></li>
                <li><Link to="/component/sub3">서브3</Link></li>
                <li><Link to="/component/sub4">서브4</Link></li>
              </ul>
            </nav>
            <ul className='infomn'>
              <li><a href="">menu</a></li>
              <li><a href="">menu</a></li>
              <li><a href="">menu</a></li>
            </ul>
        </div>
      </header>
      <div>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/component/sub1' component={Sub1}/>
        <Route path='/component/sub2' component={Sub2}/>
        <Route path='/component/sub3' component={Sub3}/>
        <Route path='/component/sub4' component={Sub4}/>
      </div>
      <footer className='footer'>

      </footer>
    </div>
  );
}

export default App;