import React, { useEffect } from 'react';
import MainTemplate from './components/MainTemplate';
import Today from './components/Today';
import Tommorow from './components/Tommorow';

function getLocation() {
  navigator.geolocation.getCurrentPosition(function(position) {
  console.log("Latitude is :", position.coords.latitude);
  console.log("Longitude is :", position.coords.longitude);
});
}
const options = { month: 'long', day: 'numeric' };

function getDate() {
  // let day = new Date().toLocaleDateString(undefined, options);
  // let day1 = new Date().toLocaleDateString(undefined, options);
  let now = new Date();	// 현재 날짜 및 시간
  console.log("현재 : ", now);
  let yesterday = new Date(now.setDate(now.getDate() - 1));	// 어제
  console.log("어제 : ", yesterday);

  console.log("현재 : ", now);
  let tomorrow = new Date(now.setDate(now.getDate() + 1));	// 내일
  console.log("내일 : ", tomorrow);
  // console.log("Today :", day - 3);
  // console.log("Today :", day - 2);
  // console.log("Today :", day - 1);
  // console.log("Today :", day1);
  // console.log("Today :", day);
  // console.log("Today :", day + 1);
  // console.log("Today :", day + 2);
  // console.log("Today :", day + 3);
}

function App() {

  useEffect(() => {
    getLocation();
    getDate();

  }, [])
  return (
    //getLocation()
    <MainTemplate
      day = {(<Today />)}
      tommorow = {(<Tommorow />)}
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