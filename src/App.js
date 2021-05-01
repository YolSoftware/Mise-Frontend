import React, { useState, useEffect } from 'react';
import customAxios from './api/customAxios';
import KakaoAPI from './api/KakaoAPI';
import MainTemplate from './components/MainTemplate';
import TimeModules from './components/TimeModules';
import MyChart from './components/MyChart';
import stateImages from './components/StateImage';
import Comment from './components/Comment';

import axios from 'axios'; // 액시오스

import {
  BrowserRouter as Router,  
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>            
            <li>
              <Link to=""></Link>
            </li>
          </ul>
        </nav>

        {/* <Switch>는 하위 <Route>들을 살펴보고 현재 URL과 일치하는 첫 번째 경로를 렌더링합니다. */}
        
        <Route path="">
          <Users />
        </Route>          
        
      </div>
    </Router>
  );
}

function Users() {
  // 상태 설정
  const [test, setTest] = useState('');  
  const [dustData, setDustData] = useState("");
  
  // 콜백 함수 설정
  function callback(data) {
    console.log(data);
    // data.today.date = new Date();
    // data.tommorow.date = new Date(new Date().setDate(new Date().getDate() + 1));
    // data.dayAfterTommorow.date = new Date(new Date().setDate(new Date().getDate() + 2));
    setDustData(data);
  }

  // 첫번째 렌더링을 다 마친 후 실행합니다.
  useEffect(
    () => {
      var lat;
      var long;
  
      navigator.geolocation.getCurrentPosition(function(position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        console.log("Latitude is11 :", lat);
        console.log("Longitude is11 :", long);

      });

      //let postUrl = 'http://121.137.158.56:8080/api/misenow/locaion'

      lat = 37.208499499999995;
      long = 127.06405760000001;
      let mData = {
        latitude : lat,
        longitude : long
      }


      console.log("Latitude is :", lat);
      console.log("Longitude is :", long);

      console.log("Latitude is :", mData.latitude);
      console.log("Longitude is :", mData.longitude);

      customAxios('/misenow/fineDust', callback, 'post', mData);
      //axios.post('http://121.137.158.56:8080/api/misenow/fineDust');
  
      // let url = 'http://121.137.158.56:8080/api/misenow/locaion';
      // let sendParam = {
      //   latitude: lat,
      //   longitude: long
      // };
  
      // axios.get(url, sendParam);
      //axios.post('http://121.137.158.56:8080/api/misenow/locaion');
  
      // customAxios('/misenow/location', callback, 'POST', mData);

      
      // // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
      // customAxios('/misenow/fineDust', callback, 'post', mData);
    }, []
  );

  console.log(test);

  return (
    <MainTemplate
      timeModules = {TimeModules}
      MyChart = {<MyChart  />}
      // dustData = {dustData}
      kakao = {<KakaoAPI />}
      stateImages = {stateImages}
    >
    </MainTemplate>
  );
}

export default App;
