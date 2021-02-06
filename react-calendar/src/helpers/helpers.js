const helpers = {
    timestampToKey(timestamp) {
        let date = new Date(timestamp),
            day = date.getDate(),
            month = date.getMonth() + 1,
            year = date.getFullYear();
        return (day <= 9 ? '0' + day : day) + '-' + (month < 9 ? '0' + month : month) + '-' + year;
    },
    getDayInfo(stateData, key) {
        return (Object.keys(stateData).includes(key)) ? stateData[key] : false;
    },
    getDayType(dayInfo) {
        if(dayInfo.mood) {
            return dayInfo.mood
        } else if (Object.keys(dayInfo).length) {
            return 'unspecified';
        } else {
            return null
        }
    },
    isDateKey(param) {
        try {
            return param.split('-').length === 3;
        } catch (e) {
            return false;
        }
    }
}

export default helpers;