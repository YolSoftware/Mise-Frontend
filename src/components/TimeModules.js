// dummy data

var TimeModules = {
    stationAddress : 1000,
    stationShortAddress : 2000,
    today : {
        date: new Date(),

        so2Grade : ["좋음", "good"],
        so2Flag : null,
        so2Value : 1,

        coGrade : ["보통", "common"],
        coFlag : null,
        coValue : 2,

        // 미세먼지
        pm10Grade : ["나쁨", "bad"],
        pm10Flag : null,
        pm10Value : 3,

        // 초미세먼지
        pm25Grade : ["매우나쁨", "muchBad"],
        pm25Flag : null,
        pm25Value : 4,

        no2Grade : ["좋음", "good"],
        no2Flag : null,
        no2Value : 5,

        o3Grade : ["보통", "common"],
        o3Flag : null,
        o3Value : 6,

        khaiValue : 7,
        khaiGrade : ["좋음", "good"],

        measureDate : new Date()
    },
    tomorrow : {
        date: new Date(new Date().setDate(new Date().getDate() + 1)),
        pm25Grade : "좋음"
        // pm25Value : 20
    },

    dayAfterTomorrow : {
        date: new Date(new Date().setDate(new Date().getDate() + 2)),
        pm25Grade : "나쁨"
        // pm25Value : 100
    }
}

export default TimeModules;
