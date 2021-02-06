import React from 'react';
import {useState, useEffect} from 'react';
import './MicroDatePicker.css';
import helpers from "../../helpers/helpers";

const MicroDatePicker = (props) => {

    let defaultTimestamp = props.selectedTimestamp;
    let [timestampToWorkWith, setTimestampToWorkWith] = useState(defaultTimestamp);

    let [visibility, setVisibility] = useState(false);
    let [pickerDate, setPickerDate] = useState('');

    let [selectDay, setSelectDay] = useState(null);
    let [selectMonth, setSelectMonth] = useState(null);
    let [selectYear, setSelectYear] = useState(null);

    let [daysInSelectedMonth, setDaysInSelectedMonth] = useState(0);

    useEffect(() => {
        setPickerDate(timestampToString());
        const selectedDate = new Date(timestampToWorkWith)
        const daysInCurrentMonth = (new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate());
        setDaysInSelectedMonth(daysInCurrentMonth);
    });

    useEffect(() => {
        if(props.notifyIfDirty !== undefined) {
            props.notifyIfDirty({
                fieldName: props.name,
                isDirty: isDateChanged(),
                value: helpers.timestampToKey(timestampToWorkWith)
            })
        }
    }, [timestampToWorkWith])

    useEffect(() => resetData(), [props.reset]);

    const isDateChanged = () => (helpers.timestampToKey(defaultTimestamp) !== helpers.timestampToKey(timestampToWorkWith));

    const resetData = () => setTimestampToWorkWith(defaultTimestamp);

    const timestampToString = () => {
        const date = new Date(timestampToWorkWith),
              day = date.getDate(),
              month = date.getMonth() + 1,
              year = date.getFullYear();

        setSelectDay(day);
        setSelectMonth(date.getMonth());
        setSelectYear(year);
        return (day <=9 ? '0' + day : day) + '.' + (month <= 9 ? '0' + month : month) + '.' + year;
    }

    const onDayChangeHandler = (e) => {
        const newDay = new Date(timestampToWorkWith).setDate(e.target.value);
        setTimestampToWorkWith(newDay)
    }

    const onMonthChangeHandler = (e) => {
        const newMonth = new Date(timestampToWorkWith).setMonth(e.target.value);
        setTimestampToWorkWith(newMonth);
    }

    const onYearChangeHandler = (e) => {
        const newYear = new Date(timestampToWorkWith).setFullYear(e.target.value);
        setTimestampToWorkWith(newYear);
    }

    return (
        <div className={'microPickerOuter'}>
            <div className={'microPickerField'}>
                {visibility
                    ? <div className={'microPickerDate'}>
                        <select
                            onChange={onDayChangeHandler}
                            className={'microPickerDay'}
                            value={selectDay}>
                            {Array(daysInSelectedMonth).fill('').map((_, i) => <option value={i+1} key={i+1}>{i+1}</option>)}
                        </select>
                        <select
                            onChange={onMonthChangeHandler}
                            className={'microPickerMonth'}
                            value={selectMonth}>
                            {props.months.map((month, i) => <option value={i} key={month}>{month}</option>)}
                        </select>
                        <select
                            onChange={onYearChangeHandler}
                            className={'microPickerYear'}
                            value={selectYear}>
                            <option value={'2020'}>2020</option>
                            <option value={'2021'}>2021</option>
                            <option value={'2022'}>2022</option>
                        </select>
                    </div>
                    : <span className={'microPickerDefaultDate'}>{pickerDate}</span>}
                <div className={'microPickerAction'}>
                    {visibility
                        ? <button onClick={() => setVisibility(false)} className={'microPickerClose text-green'}><i className={'fal fa-check'}></i></button>
                        : <button onClick={() => setVisibility(true)} className={'microPickerOpen'}><i className={'fal fa-calendar-alt'}></i></button>}
                </div>
            </div>
        </div>
    )
}

export default MicroDatePicker;