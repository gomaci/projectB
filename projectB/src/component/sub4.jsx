import React from "react";
import { Route, Link } from 'react-router-dom';
import Subs4 from './subs4.jsx';

function Sub4() {
 return(
  <div>
    <h1>서브컴포넌트4</h1>
    <ul>
        <li>
          <Link to="/subs4/map1">map1</Link>
        </li>
        <li>
          <Link to="/subs4/map2">map2</Link>
        </li>
      </ul>

      <Route
        path="/subs4"
        exact
        render={() => <div>지점을 선택해주세요.</div>}
      />
      <Route path="/subs4/:username" component={Subs4} />
  </div>
 )

}

export default Sub4;