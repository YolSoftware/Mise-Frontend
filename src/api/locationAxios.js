import axios from 'axios'; // 액시오스

function locationAxios(url, callback, method) {
    axios({
        url: '/api/misenow/locaion',
        method: 'get',
        baseURL: 'http://121.137.158.56:8080/',
        withCredentials: true,
    }).then(function (response) {
        callback(response.data);
    });
}

export default locationAxios;