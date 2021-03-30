import React from 'react';
import { IoShareSocial } from "react-icons/io5";
import { VscMenu } from 'react-icons/vsc';
import '../stylesheets/MainTemplate.css';

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
                    <div className="expression fineDustExpreesion"></div>
                    <div className="state fineDustState"></div>
                    <div className="bottomBar fineDustBottomBar"></div>
                </div>
                <div className="microDust vd-border">
                    <div className="vdkind">초미세먼지</div>
                    <div className="expression microDustExpreesion"></div>
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

export default MainTemplate;
