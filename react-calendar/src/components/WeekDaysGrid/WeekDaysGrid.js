import React from 'react';

const WeekDaysGrid = (props) => {

    return (
        <div className={'CalendarWeekdaysGrid'}>
            {props.allDays.map((item, i) => {
                return <div
                    onMouseEnter={(e) => item.mood && props.toggleInfoPopup(e, true, item.timestamp)}
                    onMouseLeave={(e) => item.mood && props.toggleInfoPopup(e, false)}
                    onClick={() => props.toggleDayPopup(item.timestamp)}
                    key={item.type + i}
                    className={item.type + ' dayItem ' + (item.isToday ? ' today ': '') + (item.mood ? item.mood : '')}>
                    {item.day}
                    {item.monthNumber && <span>&nbsp;{props.months[item.monthNumber]}</span>}
                    {item.mood &&
                        <div className={'dayItemUpdate'}>
                            <a href={'/'}>Update</a>
                        </div>
                    }
                </div>
            })}
        </div>
    );
}

export default WeekDaysGrid;