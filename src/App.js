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

// var mData;
// function logging() {
//   var lat;
//   var long;
//   navigator.geolocation.getCurrentPosition(function(position) {
//     var lat = position.coords.latitude;
//     var long = position.coords.longitude;
//     console.log("Latitude is11 :", lat);
//     console.log("Longitude is11 :", long);

//     var location = {
//       latitude : lat,
//       longitude : long
//     }
//     customAxios('/misenow/fineDust', callback, 'post', location);
//   });

//   function callback(data) {
//     var mData = data;
//     console.log("Callback");
//     console.log(mData);
//     // console.log("Test data")
//     // console.log(data);

//     // setDustData(data);
//     // setDustData(data.today);
//     // setDustData(data.tomorrow);
//     // console.log("Test dustData ");
//     // console.log(dustData);
//   }
//   console.log("hello world");
// }

// logging();

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
  const [apiSuccess, setApiSuccess] = useState(false);

  const fetchDatas = async () => {
    //setDustData(TimeModules);

    console.log("Print dustData:");
    console.log(dustData);
    console.log("123");

    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      console.log("Latitude is11 :", lat);
      console.log("Longitude is11 :", long);

      let mData = {
        latitude : lat,
        longitude : long
      }
      customAxios('/misenow/fineDust', callback, 'post', mData);
    });

    function callback(data) {
      console.log("Test data")
      console.log(data);

      setDustData(data);
      setApiSuccess(true);

      console.log("Test dustData ");
      console.log(dustData);
    }
  };
  
  useEffect(() => {
     console.log("useEffect");

      fetchDatas();
  },[]);

  useEffect(() => {
    console.log("Test dustData use Efftect");
    console.log(dustData);
  },[dustData]);

  // console.log("TEST");
  // console.log(mData);
  return (
    <div>
      {
        apiSuccess === true
        ?
        <MainTemplate
        timeModules = {dustData}
        MyChart = {<MyChart
          dustData = {dustData}
        />}
        // dustData = {dustData}
        kakao = {<KakaoAPI />}
        stateImages = {stateImages}
      >
      </MainTemplate>
        :
        "Api Loading"
      }
    </div>
  );
}

export default App;
