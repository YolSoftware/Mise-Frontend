import React, { useState } from 'react';
import { IoShareSocial } from "react-icons/io5";
import { VscMenu, VscSearch } from 'react-icons/vsc';
import '../stylesheets/MainTemplate.css';
import logo from '../api/image/logo.png';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination]);

const MainTemplate = ({ test, timeModules, MyChart, kakao, stateImage, comment }) => {

    const [currentSelectedDate, setCurrentSelectedDate] = useState(timeModules.today);

    var onClickToday = () => {
        console.log("hello world");        
    };

    return (
        <main className="mainTemplate con">
            <section className="topbar-wrapper bd-bt">
                <div className="share">
                    {kakao}
                </div>
                <div className="title"> 미세나우 </div>
                <div className="menu">
                    <img src={logo} />
                </div>
            </section>

            <section className="viewData-wrapper bd-bt con">
                <div className="fineDust vd-border card">
                    <div className="vdkind">미세먼지</div>
                    <div className="expression fineDustExpreesion">{currentSelectedDate.pm100Value}</div>
                    <div className="state fineDustState"></div>
                    <div className="bottomBar fineDustBottomBar"></div>
                </div>
                <div className="microDust vd-border card">
                    <div className="vdkind">초미세먼지</div>
                    <div className="expression microDustExpreesion">{currentSelectedDate.pm25Value}</div>
                    <div className="state microDustState"></div>
                    <div className="bottomBar microDustBottombar"></div>
                </div>
                <div className="ozone vd-border card">
                    <div className="vdkind">오존</div>
                    <div className="expression ozoneExpression">{currentSelectedDate.o3Value}</div>
                    <div className="state ozoneState"></div>
                    <div className="bottomBar ozoneBottomBar"></div>
                </div>
            </section>

            <section className="selectedKindExpreesion-wrapper bd-bt">
                <Swiper
                    spaceBetween={50}      
                    pagination={{ clickable: true }}  
                    navigation                                        
                    >
                        {/* 이부분 추가로 수정해야함. 미세먼지로 보여줄지 초미세먼지로 보여줄지 에 대해서 */}
                    <SwiperSlide className="slide1">{stateImage}</SwiperSlide>
                    <SwiperSlide className="slide2">{timeModules.tomorrow.pm25Value}</SwiperSlide>
                    <SwiperSlide className="slide3">{timeModules.dayAfterTomorrow.pm25Value}</SwiperSlide>
                </Swiper>
            </section>
            
            <section className="comment-wrapper card con">
                   {comment}
            </section>

            <section className="viewDay-wrapper bd-tp con">
                <div onClick={() => setCurrentSelectedDate(timeModules.today)} className="today day card">{timeModules.today.date.toLocaleDateString()}</div>
                <div onClick={() => setCurrentSelectedDate(timeModules.tomorrow)} className="tomorrow day card">{timeModules.tomorrow.date.toLocaleDateString()}</div>
                <div onClick={() => setCurrentSelectedDate(timeModules.dayAfterTomorrow)} className="dayAfterTomorrow day card">{timeModules.dayAfterTomorrow.date.toLocaleDateString()}</div>
            </section>

            <section className="chart-wrapper">
                <div className="chart-day">{}</div>
                <div className="chart">
                    {/* MyChart */}
                </div>
            </section>
        </main>
    )
}

export default MainTemplate;

/*

<section className="footer-wrapper">
    <div className="search-box">
        <div className="search">                        
            <input className="box" type="text" placeholder="검색어를 입력해주세요."></input>
            <VscSearch className="sb-icon" />                        
        </div>
        
    </div>
    <div className="footer-day">
        <div onClick={() => { console.log("hello world1111"); }} className="today day">{timeModules.today.date.toLocaleDateString()}</div>
        <div className="tomorrow day">{timeModules.tomorrow.date.toLocaleDateString()}</div>
        <div className="dayAfterTomorrow day">{timeModules.dayAfterTomorrow.date.toLocaleDateString()}</div>
    </div>
    <div className="footer-view24hour">
        <ul className="fv2h-list">
            <li className="morning fv2h-name">
                아침
                <ul className="morning-list">
                    <li className="morning-state">
                        나쁨
                    </li>
                    <li className="morning-viewColor"></li>
                </ul>
            </li>
            <li className="lunch fv2h-name">
                점심
            </li>
            <li className="dinner fv2h-name">
                저녁
            </li>
            <li className="night fv2h-name">
                밤
            </li>
        </ul>
    </div>
</section>

*/
