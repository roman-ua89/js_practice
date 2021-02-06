import React from 'react';
import {useRef, useState} from 'react';
import NumberInput from "../../UI/NumberInput/NumberInput";
import MicroDatePicker from "../../UI/MicroDatePicker/MicroDatePicker";
import Mood from "../../UI/Mood/Mood";
import helpers from "../../helpers/helpers";
import './DayPopup.css';

const DayPopup = (props) => {
    let [dirtyFieldsCollection, changeDirtyFieldsCollection] = useState([]);
    let [reset, makeReset] = useState(false);
    let fieldsToSave = useRef();
    let dataToSave = useRef();
    let keyToSave = useRef();
    let {countOfGreen = 0, countOfRed = 0, countOfSteps = 0, mood = ''} = (props.dayPopupDataDefault) ? props.dayPopupDataDefault : {};

    const cancelHandler = (e) => props.toggleDayPopup();

    const saveHandler = () => props.saveDayData(dataToSave.current);

    const resetDataHandler = (e) => {
        e.preventDefault();
        makeReset(Math.random());
        changeDirtyFieldsCollection([]);
    }

    const notifyIfDirty = ({fieldName, isDirty, value}) => {
        if(isDirty && !dirtyFieldsCollection.includes(fieldName)) {
            changeDirtyFieldsCollection([...dirtyFieldsCollection, fieldName]);
        }

        if(!isDirty) {
            let clone = [...dirtyFieldsCollection];
            changeDirtyFieldsCollection(() => {
                return clone.filter(savedField => fieldName !== savedField);
            })
        }

        if(helpers.isDateKey(value)) {
            keyToSave.current = value;
        } else if (!dirtyFieldsCollection.includes('microDatePicker')) {
            keyToSave.current = helpers.timestampToKey(props.selectedTimestamp);
        }

        if(value) {
            fieldsToSave.current = {...fieldsToSave.current, [fieldName]: value};
            dataToSave.current = {
                [keyToSave.current]: {...fieldsToSave.current}
            }
        }
    }

    return (
        <>
            <div className={'dayPopupOuter'}>
                <div className={'dayPopupInner'}>
                    <div className={'dayPopupTop'}>
                        <a onClick={resetDataHandler}
                           className={'dayPopupClearAll ' + (dirtyFieldsCollection.length ? ' active ': '')}
                           href={'/'}>Clear all</a>
                    </div>
                    <div className={'dayPopupMiddle'}>
                        <ul className={'dayPopupProps clearfix'}>
                            <li>
                                <div className={'dayPopupProp'}>Date</div>
                                <div className={'dayPopupValue'}>
                                    <MicroDatePicker
                                        months={props.months}
                                        selectedTimestamp={props.selectedTimestamp}
                                        reset={reset}
                                        name={'microDatePicker'}
                                        notifyIfDirty={notifyIfDirty} />
                                </div>
                            </li>
                            <li>
                                <div className={'dayPopupProp'}>Green counts</div>
                                <div className={'dayPopupValue'}>
                                    <NumberInput
                                        defaultValue={(countOfGreen) ? countOfGreen : 0}
                                        reset={reset}
                                        name={'countOfGreen'}
                                        notifyIfDirty={notifyIfDirty} />
                                </div>
                            </li>
                            <li>
                                <div className={'dayPopupProp'}>Red counts</div>
                                <div className={'dayPopupValue'}>
                                    <NumberInput
                                        defaultValue={(countOfRed) ? countOfRed : 0}
                                        reset={reset}
                                        name={'countOfRed'}
                                        notifyIfDirty={notifyIfDirty} />
                                </div>
                            </li>
                            <li>
                                <div className={'dayPopupProp'}>Steps counts</div>
                                <div className={'dayPopupValue'}>
                                    <NumberInput
                                        hideButtons={true}
                                        defaultValue={(countOfSteps) ? countOfSteps : 0}
                                        reset={reset}
                                        name={'countOfSteps'}
                                        notifyIfDirty={notifyIfDirty} />
                                </div>
                            </li>
                            <li>
                                <div className={'dayPopupProp'}>Your feelings</div>
                                <div className={'dayPopupValue'}>
                                    <Mood
                                        defaultValue={(mood) ? mood : ''}
                                        reset={reset}
                                        name={'mood'}
                                        notifyIfDirty={notifyIfDirty} />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={'dayPopupBottom'}>
                        <div className={'dayPopupActions'}>
                            <button
                                onClick={cancelHandler}
                                className={'cancel'}><i className={'fal fa-times'}></i>Cancel</button>
                            <button
                                onClick={saveHandler}
                                className={'confirm'} disabled={!dirtyFieldsCollection.length}><i className={'fal fa-check'}></i>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DayPopup;