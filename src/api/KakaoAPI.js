import React, { Component } from 'react';
import kakao from './image/kakao.png';
import logo from './image/logo.png';

class KakaoAPI extends Component {
  componentDidMount() {
    window.Kakao.init('40119826bf14cad9393d9a049ce7f876');

    window.Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',
      content: {
        title: '미세나우',
        description: '지금 미세먼지 상황을 보세요!',
        imageUrl: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
          mobileWebUrl: 'https://cheonmro.github.io/',
          webUrl: 'https://cheonmro.github.io/'
        }
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: 'https://cheonmro.github.io/',
            webUrl: 'https://cheonmro.github.io/'
          }
        },
        {
          title: '앱으로 보기',
          link: {
            mobileWebUrl: 'https://cheonmro.github.io/',
            webUrl: 'https://cheonmro.github.io/'
          }
        }
      ]
    });
  }
  onClickKakao = () => {
    window.open('https://sharer.kakao.com/talk/friends/picker/link')
  }
  render() {
    return (
      <div className="Kakao">
        <button id="kakao-link-btn" onClick={this.onClickKakao}><img src={kakao} alt="kakao" /></button>
      </div>
    );
  }
}

export default KakaoAPI;