import React, { useState } from 'react';
import '../stylesheets/MainTemplate.css';
import logo from '../api/image/logo.png';
import Comment from '../components/Comment';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import css
import '../stylesheets/StateImage.css';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination]);

const MainTemplate = ({ test, timeModules, MyChart, kakao, stateImages, comment }) => {

    const [currentSelectedDate, setCurrentSelectedDate] = useState(timeModules.today);
    const [activeId, setActiveId] = useState(0);
    const [visibleChart, setVisibleChart] = useState('visible');
    const [slideState, setSlideState] = useState('commonState');

    // Javascript 순수한 Date 객체를 만든다.
    function makePureDate(mYear, mMonth, mDay) {
        return new Date(mYear, mMonth - 1, mDay);
    }

    function returnProperCss(mGrade) {
        let ret;
        if (mGrade === "매우나쁨") {
            ret = "muchBad";
        }
        else if (mGrade === "나쁨") {
            ret = "bad";
        }
        else if (mGrade === "보통") {
            ret = "common";
        }
        else if (mGrade === "좋음") {
            ret = "good";
        }
        else {
            ret = "error";
        }
        return ret;
    }

    const handleOnClick = (data, index) => {
        setCurrentSelectedDate(data);

        /*
        if(slideState !== 'clickButton') {
            setTempActiveId(activeId);
        }
        */
        if(index === 0 && slideState === 'clickButton') {
            setSlideState('commonState');
            setVisibleChart('visible');
            setActiveId(0);
        } else if(index === 1 || index === 2) {
            setSlideState('clickButton');
            setVisibleChart('hidden');
            setActiveId(1);
        }
    }


    var convertDate = (mDate) => {
        return mDate.toLocaleDateString('ko-KR', {weekday: 'long',});
    }

    var selectImage = (mState) => {
        let ret;
        if (mState === "매우나쁨") {
            ret = stateImages.muchBadImage;
        }
        else if (mState === "나쁨") {
            ret = stateImages.badImage;
        }
        else if (mState === "보통") {
            ret = stateImages.commonImage;
        }
        else if (mState === "좋음") {
            ret = stateImages.goodImage;
        }
        else {
            ret = "";
        }
        return ret;
    }

    const changeSlide = (realIndex) => {
        setActiveId(realIndex)
    }

    return (
        <main className="mainTemplate con">
            <div className="page-wrapper">

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
                    <div className="expression fineDustExpreesion">{currentSelectedDate.pm10Value}
                    {
                        currentSelectedDate === timeModules.today
                        ? <span>μg/㎥</span>
                        : ""
                    }
                    </div>
                    <div className="state fineDustState">{currentSelectedDate.pm10Grade}</div>
                    <div className="bottomBar fineDustBottomBar">
                        <div className={returnProperCss(currentSelectedDate.pm10Grade)}>
                            <div className={activeId === 0 ? 'active' : ''}></div>
                        </div>
                    </div>
                </div>
                <div className="microDust vd-border card">
                    <div className="vdkind">초미세먼지</div>
                    <div className="expression microDustExpreesion">{currentSelectedDate.pm25Value}
                    <span>&nbsp;
                    {
                        currentSelectedDate === timeModules.today
                        ? <span>μg/㎥</span>
                        : ""
                    }
                    </span>
                    </div>
                    <div className="state microDustState">{currentSelectedDate.pm25Grade}</div>
                    <div className="bottomBar microDustBottombar">
                    <div className={returnProperCss(currentSelectedDate.pm25Grade)}>
                            <div className={activeId === 1 ? 'active' : ''}></div>
                        </div>
                    </div>
                </div>
                <div className="ozone vd-border card">
                    <div className="vdkind">오존</div>
                    <div className="expression ozoneExpression">{currentSelectedDate.o3Value}
                    {
                        currentSelectedDate === timeModules.today
                        ? <span>ppm</span>
                        : ""
                    }
                    </div>
                    <div className="state ozoneState">{currentSelectedDate.o3Grade}</div>
                    <div className="bottomBar ozoneBottomBar">
                    <div className={returnProperCss(currentSelectedDate.o3Grade)}>
                            <div className={activeId === 2 ? 'active' : ''}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="selectedKindExpreesion-wrapper bd-bt">

                {/* 이부분 추가로 수정해야함. 미세먼지로 보여줄지 초미세먼지로 보여줄지 에 대해서 */}
                {
                    slideState === 'commonState'
                    ?
                    <Swiper
                        spaceBetween ={50}      
                        pagination = { 
                            { clickable: true }
                            }
                        navigation
                        onSlideChange = {(e) => changeSlide(e.realIndex)}
                        >
                        <SwiperSlide className="slide1">
                            <div className="image-wrapper">
                                <img src={selectImage(currentSelectedDate.pm10Grade)} className="image"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide2">
                            <div className="image-wrapper">
                                <img src={selectImage(currentSelectedDate.pm25Grade)} className="image"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide3">
                            <div className="image-wrapper">
                                <img src={selectImage(currentSelectedDate.o3Grade)} className="image"/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    :
                    <div className="image-wrapper">
                        <img src={selectImage(currentSelectedDate.pm25Grade)} className="image"/>
                    </div>
                }

            </section>
            
            <section className="comment-wrapper card con">
                {
                    console.log("currentSelectedDate.pm10Grade" + currentSelectedDate.pm10Grade)
                }
                <Comment
                        pPm10Grade = {currentSelectedDate.pm10Grade}
                        pPm25Grade = {currentSelectedDate.pm25Grade}
                        pO3Grade = {currentSelectedDate.o3Grade}
                />
            </section>

            <section className="viewDay-wrapper bd-tp con">
                 <div onClick={() => handleOnClick(timeModules.today, 0)} className="today day card">
                     {convertDate(makePureDate(
                        timeModules.today.date.date.year,
                        timeModules.today.date.date.month,
                        timeModules.today.date.date.day,
                        ))}
                </div>
                <div onClick={() => handleOnClick(timeModules.tomorrow, 1)} className="tomorrow day card">
                    {convertDate(makePureDate(
                        timeModules.tomorrow.date.date.year,
                        timeModules.tomorrow.date.date.month,
                        timeModules.tomorrow.date.date.day,
                        ))}
                </div>
                <div onClick={() => handleOnClick(timeModules.dayAfterTomorrow, 2)} className="dayAfterTomorrow day card">
                    {convertDate(makePureDate(
                        timeModules.dayAfterTomorrow.date.date.year,
                        timeModules.dayAfterTomorrow.date.date.month,
                        timeModules.dayAfterTomorrow.date.date.day,
                        ))}
                </div>
            </section>

            
            </div>

            <div className="page-wrapper">

                <section className="chart-wrapper">
                    <div className="chart-day">{}</div>
                    <div className="chart">
                        <div className={visibleChart}>
                            {MyChart}
                        </div>
                    </div>
                </section>
                
            </div>
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
