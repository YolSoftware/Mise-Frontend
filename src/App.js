import React, { useState, useEffect } from 'react';
import MainTemplate from './components/MainTemplate';
import Today from './components/Today';
import Tommorow from './components/Tommorow';
import customAxios from './api/customAxios';
import TodayDate from './components/TodayDate';

import {
  BrowserRouter as Router,  
  Route,
  Link
} from 'react-router-dom';

// TodoList
// 1. Today, TodayDate, Tommorow 하나로 만들기
// 2. 육각형 직접 그려보기
// 3. 선택된 슬라이드에 맞는 view 하단에 밑줄 추가
// 4. footer 완성
// 5. 현재 MainTemplate 에 전부 모여있음. 분리 할 수 있는거 분리하기
// 6. 식이거랑 합치기

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
      day = {<Today />}
      tommorow = {<Tommorow />}
      todayDate = {<TodayDate />}
      fineDustData = {test} 
    >

    </MainTemplate>

  );

}

export default App;
