import Today from './time/Today';
import Tomorrow from './time/Tomorrow';
import TodayDate from './time/TodayDate';
//import dayAfterTomorrow from './time/dayAfterTomorrow';

const TimeModules = {
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
        pm25Value : 10
    },

    dayAfterTomorrow : {
        date: new Date(new Date().setDate(new Date().getDate() + 2)),
        pm25Value : 20
    }

    // Today,
    // Tomorrow,
    // dayAfterTomorrow,
    // TodayDate
}

export default TimeModules;