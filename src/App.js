import React, { useState, useEffect } from 'react';
import MainTemplate from './components/MainTemplate';
import customAxios from './api/customAxios';
import MyChart from './components/MyChart';
import TimeModules from './components/TimeModules';
import KakaoAPI from './api/KakaoAPI';

import {
  BrowserRouter as Router,  
  Route,
  Link
} from 'react-router-dom';

// TodoList
// 4. footer 완성

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>            
            <li>
              <Link to="/users">사용자</Link>
            </li>
          </ul>
        </nav>

        {/* <Switch>는 하위 <Route>들을 살펴보고 현재 URL과 일치하는 첫 번째 경로를 렌더링합니다. */}
        
        <Route path="/users">
          <Users />
        </Route>          
        
      </div>
    </Router>
  );
}

function Users() {
  // 상태 설정
  const [test, setTest] = useState('');  
  
  // 콜백 함수 설정
  function callback(data) {
    setTest(data);    
  }

  // 첫번째 렌더링을 다 마친 후 실행합니다.
  useEffect(
    () => {
      // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.      
      customAxios('/misenow/fineDust', callback, 'get');            
    }, []
  );

  return (
    <MainTemplate
      timeModules = {TimeModules}
      MyChart = {<MyChart />}
      kakao = {<KakaoAPI />}
    >      
    </MainTemplate>

  );

}

export default App;
