import React from 'react';
import WeekDaysSwitcher from "../WeekDaysSwitcher/WeekDaysSwitcher";
import WeekDaysHeader from "../WeekDaysHeader/WeekDaysHeader";
import WeekDaysGrid from "../WeekDaysGrid/WeekDaysGrid";
import DayPopup from "../DayPopup/DayPopup";
import InfoPopup from "../InfoPopup/InfoPopup";
import helpers from '../../helpers/helpers';

class Calendar extends React.Component {

    state = {
        weekDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        selectedDate: '',

        showDayPopup: false,
        dayPopupDataDefault: null,
        selectedTimestamp: null,
        showInfoPopup: false,
        infoPopupPosition: {},
        infoPopupDimensions: {width: 230, height: 130}, //hardcoded, can't get size synchronously
        infoPopupData: null,

        currentMonthName: '',
        currentYear: '',

        allDays: [],
        currentDate: new Date(),

        everyDayData: {
            '05-02-2021': {
                countOfGreen: 5,
                countOfRed: 55,
                countOfSteps: 555,
                mood: 'happy'
            },
            '11-02-2021': {
                countOfGreen: 11,
                countOfRed: 111,
                countOfSteps: 1111,
                mood: 'happy'
            },
            '15-02-2021': {
                countOfGreen: 15,
                countOfRed: 155,
                countOfSteps: 1555,
                mood: 'happy'
            },
            '18-02-2021': {
                countOfGreen: 18,
                countOfRed: 188,
                countOfSteps: 18000,
                mood: 'sad'
            }
        }
    }

    componentDidMount() {
        const days = this.fillDays();
        this.setState({
            currentMonthName: this.state.months[this.state.currentDate.getMonth()],
            currentYear: this.state.currentDate.getFullYear(),
            allDays: days
        })
    }

    markDay(dateKey) {
        const dayInfo = helpers.getDayInfo(this.state.everyDayData, dateKey);
        return helpers.getDayType(dayInfo);
    }

    fillDays() {
        const date = this.state.currentDate;
        date.setDate(1)
        let days = [];
        let lastDayOfTheCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        let lastDayOfThePreviousMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        let lastDayIndex =  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
        let firstDayIndex = date.getDay();
        let nextDays = 7 - lastDayIndex - 1;

        for(let x = firstDayIndex; x > 0; x--) {
            let clonedDate = new Date(this.state.currentDate.getTime());
            let timestamp = clonedDate.setMonth(clonedDate.getMonth() - 1);
            timestamp = clonedDate.setDate(lastDayOfThePreviousMonth - x + 1);

            days.push({
                mood: this.markDay(helpers.timestampToKey(timestamp)),
                timestamp,
                type: 'prevDate',
                day: lastDayOfThePreviousMonth - x + 1
            })
        }

        for(let i = 1; i <= lastDayOfTheCurrentMonth; i++) {
            let clonedDate = new Date(this.state.currentDate.getTime()),
                timestamp = clonedDate.setDate(i);

            if(i === new Date().getDate() && this.state.currentDate.getMonth() === new Date().getMonth()) {
                days.push({
                    mood: this.markDay(helpers.timestampToKey(timestamp)),
                    timestamp,
                    isToday: true,
                    type: 'current',
                    day: i
                })
            } else {
                days.push({
                    mood: this.markDay(helpers.timestampToKey(timestamp)),
                    timestamp,
                    type: 'current',
                    day: i
                })
            }
        }

        for(let j = 1; j <= nextDays; j++) {
            let monthNumber = null,
                clonedDate = new Date(this.state.currentDate.getTime()),
                timestamp = clonedDate.setMonth(clonedDate.getMonth() + 1);
                timestamp = clonedDate.setDate(j);
            if(j === 1) {
                monthNumber = new Date(clonedDate.setMonth(clonedDate.getMonth() + 1)).getMonth() - 1;
            }

            days.push({
                mood: this.markDay(helpers.timestampToKey(timestamp)),
                timestamp,
                monthNumber,
                type: 'nextDate',
                day: j
            })
        }
        return days;
    }

    goToPrevMonth() {
        let date = this.state.currentDate;
        this.setState({
            currentDate: new Date(date.setMonth(date.getMonth() - 1)),
            currentMonthName: this.state.months[this.state.currentDate.getMonth()],
            currentYear: this.state.currentDate.getFullYear(),
            allDays: this.fillDays()
        });
    }

    goToNextMonth() {
        let date = this.state.currentDate;
        this.setState({
            currentDate: new Date(date.setMonth(date.getMonth() + 1)),
            currentMonthName: this.state.months[this.state.currentDate.getMonth()],
            currentYear: this.state.currentDate.getFullYear(),
            allDays: this.fillDays()
        });
    }

    toggleDayPopup = (timestamp) => {
        if(timestamp) {
            this.setState({
                showDayPopup: true,
                selectedTimestamp: timestamp,
                dayPopupDataDefault: helpers.getDayInfo(this.state.everyDayData, helpers.timestampToKey(timestamp))
            })
        } else {
            this.setState({
                showDayPopup: false
            })
        }
    }

    saveDayData = (dataToSave) => {
        this.setState((prevState) => {
            return {
                showDayPopup: false,
                everyDayData: {...prevState.everyDayData, ...dataToSave},
            }
        }, () => {
            this.setState({
                allDays: this.fillDays()
            });
        });

    }

    toggleInfoPopup = (e, show, timestamp) => {
        let pos = {},
            left = 0,
            top = 0;

        if(show) {
            if(e.target.offsetLeft + e.target.offsetWidth + this.state.infoPopupDimensions.width < e.target.offsetParent.offsetWidth) {
                left = e.target.offsetLeft + e.target.offsetWidth;
            } else {
                left =  e.target.offsetLeft - this.state.infoPopupDimensions.width;
            }

            if(e.target.offsetTop + e.target.offsetHeight + this.state.infoPopupDimensions.height < e.target.offsetParent.offsetHeight) {
                top = e.target.offsetTop + e.target.offsetHeight;
            } else {
                top = e.target.offsetTop - this.state.infoPopupDimensions.height;
            }

            pos = {left, top};

            if(timestamp) {
                let key = helpers.timestampToKey(timestamp);

                this.setState({
                    showInfoPopup: show,
                    infoPopupPosition: pos,
                    infoPopupData: helpers.getDayInfo(this.state.everyDayData, key)
                })
            }
        } else {
            this.setState({
                showInfoPopup: show
            })
        }
    }

    render() {
        return (
            <>
                <WeekDaysSwitcher
                    currentMonthName={this.state.currentMonthName}
                    currentYear={this.state.currentYear}
                    goToPrevMonth={this.goToPrevMonth.bind(this)}
                    goToNextMonth={this.goToNextMonth.bind(this)} />

                <div className={'CalendarOuter ' + (!this.state.showDayPopup ? 'focus' : '')}>
                    <WeekDaysHeader weekDays={this.state.weekDays} />
                    <WeekDaysGrid
                        months={this.state.months}
                        currentDate={this.state.currentDate}
                        allDays={this.state.allDays}
                        toggleDayPopup={this.toggleDayPopup}
                        toggleInfoPopup={this.toggleInfoPopup} />
                </div>
                {this.state.showDayPopup && <DayPopup
                    saveDayData={this.saveDayData}
                    toggleDayPopup={this.toggleDayPopup}
                    dayPopupDataDefault={this.state.dayPopupDataDefault}
                    selectedTimestamp={this.state.selectedTimestamp}
                    months={this.state.months} />
                }
                {this.state.showInfoPopup && <InfoPopup
                    infoPopupData={this.state.infoPopupData}
                    style={this.state.infoPopupPosition} />
                }
            </>
        )
    }
}

export default Calendar;