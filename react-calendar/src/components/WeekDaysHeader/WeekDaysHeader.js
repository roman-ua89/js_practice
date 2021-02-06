import React from 'react';

const WeekDaysHeader = ({weekDays}) => {

    return (
        <div className={'calendarWeekdaysHeader'}>
            <ul className={'calendarWeekDays clearfix'}>
                {weekDays.map((day, i) => <li key={i}>{day}</li>)}
            </ul>
        </div>
    );
}

export default WeekDaysHeader;