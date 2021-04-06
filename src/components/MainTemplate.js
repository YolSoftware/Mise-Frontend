import React from 'react';
import { IoShareSocial } from "react-icons/io5";
import { VscMenu } from 'react-icons/vsc';
import '../stylesheets/MainTemplate.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
import 'swiper/swiper.scss';

// 해야할 것
// 1. 데이터 받아와서 보여주기
// 2. 날짜 바뀌면 리렌더링하기


const MainTemplate = ({ day, tommorow }) => {
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
                    <div className="expression fineDustExpreesion">100</div>
                    <div className="state fineDustState">매우 좋음</div>
                    <div className="bottomBar fineDustBottomBar"></div>
                </div>
                <div className="microDust vd-border">
                    <div className="vdkind">초미세먼지</div>
                    <div className="expression microDustExpreesion">102</div>
                    <div className="state microDustState">매우 좋음</div>
                    <div className="bottomBar microDustBottombar"></div>
                </div>
                <div className="ozone vd-border">
                    <div className="vdkind">오존</div>
                    <div className="expression ozoneExpression">104</div>
                    <div className="state ozoneState">매우 좋음</div>
                    <div className="bottomBar ozoneBottomBar"></div>
                </div>
            </section>

            <section className="selectedKindExpreesion-wrapper">


            <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
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
                <div className="today day">{day}</div>
                <div className="tommorow day">{tommorow}</div>
                <div className="??? day"></div>
            </section>
        </main>
    )
}

// 슬라이더 참고
// https://swiperjs.com/react

export default MainTemplate;
