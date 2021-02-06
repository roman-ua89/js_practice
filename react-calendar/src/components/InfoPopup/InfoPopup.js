import React from 'react';
import './InfoPopup.css';

const InfoPopup = (props) => {

    if (!props.infoPopupData) return null;

    return (
        <div className={'infoPopup'} style={props.style}>
            <ul className={'infoPopupList'}>
                {props.infoPopupData.countOfGreen &&
                <li className={'countOfGreen'}>
                    <span className={'infoPopupValue'}>{props.infoPopupData.countOfGreen}</span>
                    <i>natural foods eaten</i>
                </li>}

                {props.infoPopupData.countOfRed &&
                <li className={'countOfRed'}>
                    <span className={'infoPopupValue'}>{props.infoPopupData.countOfRed}</span>
                    <i>non-natural foods eaten</i>
                </li>}

                {props.infoPopupData.countOfSteps &&
                <li className={'countSteps'}>
                    <span className={'infoPopupValue'}>{props.infoPopupData.countOfSteps}</span>
                    <i>steps done</i>
                </li>}

                <li className={'mood ' + props.infoPopupData.mood}>
                    {props.infoPopupData.mood === 'happy' &&
                    <span className={'infoPopupValue'}><i className="fal fa-smile-beam"></i></span>}
                    {props.infoPopupData.mood === 'sad' &&
                    <span className={'infoPopupValue'}><i className="fal fa-frown"></i></span>}
                    {props.infoPopupData.mood && <i>mood</i>}
                </li>
            </ul>
        </div>
    )
}

export default InfoPopup;