import React from 'react';
import './WeekDaysSwitcher.css';

const WeekDaysSwitcher = (props) => {

    return (
        <div className={'CalendarWeekdaysSwitcher'}>
            <span
                className={'calendarPrevDate'}
                onClick={props.goToPrevMonth}><i className={'far fa-chevron-left'}></i></span>
            <span className={'CalendarCurrentDate'}>
                <strong>{props.currentMonthName}</strong>&nbsp;
                <strong>{props.currentYear}</strong>
            </span>
            <span
                className={'calendarNextDate'}
                onClick={props.goToNextMonth}><i className={'far fa-chevron-right'}></i></span>
        </div>
    )
}

export default WeekDaysSwitcher;