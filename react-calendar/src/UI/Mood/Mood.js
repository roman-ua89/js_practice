import React from 'react';
import {useEffect, useState} from 'react';
import './Mood.css';

const Mood = (props) => {

    let defaultValue = (props.defaultValue) ? props.defaultValue : '';
    let [mood, setMood] = useState(defaultValue);

    useEffect(() => {
        if(props.notifyIfDirty !== undefined) {
            props.notifyIfDirty({
                fieldName: props.name,
                isDirty: !!mood,
                value: mood
            })
        }
    }, [mood]);

    useEffect(() => (props.reset && setMood(null)), [props.reset]);

    return (
        <>
            <button
                onClick={() => setMood('happy')}
                className={'moodBtn happy ' + (mood === 'happy' ? 'active': '')}><i className={'fal fa-smile-beam'}></i></button>
            <button
                onClick={() => setMood('sad')}
                className={'moodBtn sad ' + (mood === 'sad' ? 'active': '')}><i className={'fal fa-frown'}></i></button>
        </>
    )
}

export default Mood;