// dummy data

var TimeModules = {
    today : {
        date: new Date(),
        pm25Value: 1,
        pm100Value : 2,
        o3Value : 3,
        no2Value : 4,
        coValue : 5,
        so2Value : 6
    },
    tomorrow : {
        date: new Date(new Date().setDate(new Date().getDate() + 1)),
        pm25Value : 20
    },

    dayAfterTomorrow : {
        date: new Date(new Date().setDate(new Date().getDate() + 2)),
        pm25Value : 100
    }
}

export default TimeModules;