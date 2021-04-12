import React, { useEffect, useState } from 'react';
import axios from 'axios'; // 액시오스

import MainTemplate from './components/MainTemplate';
import Today from './components/Today';
import Tommorow from './components/Tommorow';
import customAxios from './api/customAxios';

const options = { month: 'long', day: 'numeric' };

function getDate() {
  let now = new Date();	// 현재 날짜 및 시간
  console.log("현재 : ", now);
  let yesterday = new Date(now.setDate(now.getDate() - 1));	// 어제
  console.log("어제 : ", yesterday);

  console.log("현재 : ", now);
  let tomorrow = new Date(now.setDate(now.getDate() + 1));	// 내일
  console.log("내일 : ", tomorrow);
}

/**
 * 
 * 각 날짜에 대한 정보
 * dataOfDay
 * 
 * 
 */

function App() {
  // 상태 설정
  const [test, setTest] = useState('');  

  // 콜백 함수 설정
  function callback(data) {
    setTest(data);
    console.log(data);

  }
  // 첫번째 렌더링을 다 마친 후 실행합니다.
  useEffect(() => {
    let lat;
    let long;
    getLocation();
    getDate();
    function getLocation() {
      navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
    }

    console.log("send");
    
    // let url = 'http://121.137.158.56:8080/api/misenow/locaion';
    // let sendParam = {
    //   latitude: lat,
    //   longitude: long
    // };

    // axios.get(url, sendParam);
    axios.get('http://121.137.158.56:8080/api/misenow/locaion', {
      params: {
        latitude: lat,
        longitude: long
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });  

    

    // console.log("Result "+
    // axios.get(, {
    //   params: {

    //   }
    // })
    // .then( response => { console.log(response) } )
    // );

    // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
    customAxios('/misenow/fineDust', callback, 'get');

  }, [])
  return (
    //getLocation()
    <MainTemplate
      day = {(<Today />)}
      tommorow = {(<Tommorow />)}
      fineDustData = {test} 
    >
    </MainTemplate>
  )
}

export default App;

/**
 * 현재 날짜 / 내일 날짜 얻기
 * https://jsikim1.tistory.com/103
 * 
 * 
 * 
 */