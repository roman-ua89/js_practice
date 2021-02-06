import React from 'react';
import {useRef, useState, useEffect} from 'react';
import './NumberInput.css';

const NumberInput = (props) => {

    const inputRef = useRef();
    const defaultInputValue = (props.defaultValue) ? props.defaultValue : 0;
    let [value, setValue] = useState(defaultInputValue);
    let [focus, setFocus] = useState(false);

    useEffect(() => {
        if(props.notifyIfDirty !== undefined) {
            props.notifyIfDirty({
                fieldName: props.name,
                isDirty: !!value,
                value
            })
        }
    }, [value])

    useEffect(() => resetData(), [props.reset]);

    const resetData = () => setValue(defaultInputValue);

    const changeValue = (v) => {
        setValue(prev => {
            return (prev + v <= 0) ? 0 : prev + v;
        });
    }

    const onChangeHandle = (e) => {
        let value = Number(e.target.value);
        setValue(prevValue => {
            return (isNaN(value)) ? prevValue : Math.abs(value);
        })
    }

    const onBlurHandle = e => setFocus(false);

    const onFocusHandle = e => setFocus(true);

    return (
        <div className={'numberInputOuter ' + (focus ? ' focus ' : '')}>
            {!props.hideButtons && <button onClick={() => changeValue(-1)}><i className={'fal fa-minus'}></i></button>}
            <input
                onBlur={onBlurHandle}
                onFocus={onFocusHandle}
                ref={inputRef}
                value={value}
                onChange={onChangeHandle}
                type={'text'} />
            {!props.hideButtons && <button onClick={() => changeValue(+1)}><i className={'fal fa-plus'}></i></button>}
        </div>
    )
}

export default NumberInput;