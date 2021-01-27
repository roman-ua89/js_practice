import React from 'react';
import classes from './activeQuiz.module.css';
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
    <div className={classes.activeQuiz}>
        <p className={classes.question}>
            <span>
                <strong>
                    {props.answerNumber}.&nbsp;
                </strong>
                {props.question}
            </span>
            <small>{props.answerNumber} from {props.quizLength}</small>
        </p>
        <AnswersList
            state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>
)

export default ActiveQuiz