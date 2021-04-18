import axios from 'axios'; // 액시오스

function customAxios(mUrl, callback, method, mData) {
    axios({
        url: '/api' + mUrl,
        method: method,
        /*
         * 개발 환경에서의 크로스 도메인 이슈를 해결하기 위한 코드로
         * 운영 환경에 배포할 경우에는 15~16행을 주석 처리합니다.
         * 
         * ※크로스 도메인 이슈: 브라우저에서 다른 도메인으로 URL 요청을 하는 경우 나타나는 보안문제
         */
        headers: {
            'content-type': 'application/json',
        },
        baseURL: 'http://121.137.158.56:8080/',
        data: {
            "latitude" : '1',
            "longitude" : '2'
        },
        withCredentials: true,
    }).then(function (response) {
        // console.log(response.status);
        // console.log(response.data);
        // console.log(response.response);
        callback(response.data);
    });
}

export default customAxios;