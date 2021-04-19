import React from 'react';
import { IoShareSocial } from "react-icons/io5";
import { VscMenu, VscSearch } from 'react-icons/vsc';
import '../stylesheets/MainTemplate.css';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination]);

const MainTemplate = ({ timeModules, MyChart }) => {
    return (
        <main className="mainTemplate con">
            <section className="topbar-wrapper">
                <div className="share">
                    <IoShareSocial />
                </div>
                <div className="title"> 미세나우 </div>
                <div className="menu">
                    <VscMenu />
                </div>
            </section>

            <section className="viewData-wrapper">
                <div className="fineDust vd-border">
                    <div className="vdkind">미세먼지</div>
                    <div className="expression fineDustExpreesion">{timeModules.Today.pm100Value}</div>
                    <div className="state fineDustState"></div>
                    <div className="bottomBar fineDustBottomBar"></div>
                </div>
                <div className="microDust vd-border">
                    <div className="vdkind">초미세먼지</div>
                    <div className="expression microDustExpreesion">{timeModules.Today.pm25Value}</div>
                    <div className="state microDustState"></div>
                    <div className="bottomBar microDustBottombar"></div>
                </div>
                <div className="ozone vd-border">
                    <div className="vdkind">오존</div>
                    <div className="expression ozoneExpression"></div>
                    <div className="state ozoneState"></div>
                    <div className="bottomBar ozoneBottomBar"></div>
                </div>
            </section>            

            <section className="selectedKindExpreesion-wrapper">
                <Swiper
                    spaceBetween={50}      
                    pagination={{ clickable: true }}  
                    navigation                                        
                    >
                        {/* 이부분 추가로 수정해야함. 미세먼지로 보여줄지 초미세 먼지로 보여줄지 에 대해서 */}
                    <SwiperSlide className="slide1">{timeModules.Today.pm100Value}</SwiperSlide>
                    <SwiperSlide className="slide2">Slide 2</SwiperSlide>
                    <SwiperSlide className="slide3">Slide 3</SwiperSlide>
                </Swiper>
            </section>
            
            <section className="comment-wrapper">
                <span className="comment">
                    마스크 착용!
                    <br />
                    더 심해질 예정입니다.
                </span>
            </section>

            <section className="viewDay-wrapper">
                <div className="today day">{<timeModules.Today></timeModules.Today>}</div>
                <div className="tomorrow day">{<timeModules.Tomorrow></timeModules.Tomorrow>}</div>
                <div className="dayAfterTomorrow day">{<timeModules.dayAfterTomorrow></timeModules.dayAfterTomorrow>}</div>
            </section>

            <section className="chart-wrapper">
                <div className="chart-day">{<timeModules.TodayDate></timeModules.TodayDate>}</div>
                <div className="chart">
                    {MyChart}
                </div>
            </section>

            <section className="footer-wrapper">
                <div className="search-box">
                    <div className="search">                        
                        <input className="box" type="text" placeholder="검색어를 입력해주세요."></input>
                        <VscSearch className="sb-icon" />                        
                    </div>
                </div>
                <div className="footer-day">
                    <div className="today day">{<timeModules.Today></timeModules.Today>}</div>
                    <div className="tomorrow day">{<timeModules.Tomorrow></timeModules.Tomorrow>}</div>
                    <div className="dayAfterTomorrow day">{<timeModules.dayAfterTomorrow></timeModules.dayAfterTomorrow>}</div>
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
        </main>
    )
}

export default MainTemplate;