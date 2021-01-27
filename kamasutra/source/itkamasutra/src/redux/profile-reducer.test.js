import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

let state = {
    posts:[
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: 'It is my first post', likesCount: 0},
        {id: 3, message: 'Sveta', likesCount: 14},
        {id: 4, message: 'Sasha', likesCount: 5},
        {id: 5, message: 'Runner', likesCount: 4},
        {id: 6, message: 'Valera', likesCount: 23}
    ]
}

it('length of post should be incremented', () => {
    //test data
    let action = addPostActionCreator("it-kamasutra.com");
    //action
    let newState = profileReducer(state, action);
    //expectation
    expect (newState.posts.length).toBe(7);

});
it('message of new post should be correct', () => {
    //test data
    let action = addPostActionCreator("it-kamasutra.com");
    //action
    let newState = profileReducer(state, action);

    //expectation

    expect (newState.posts[6].message).toBe("it-kamasutra.com");
});

it('after deleting of messages should be decrement', () => {
    //test data
    let action = deletePost(1);
    //action
    let newState = profileReducer(state, action);

    //expectation

    expect (newState.posts.length).toBe(5);
});

it('after deleting of messages shouldnot be decrement if id is incorrect', () => {
    //test data
    let action = deletePost(1000);
    //action
    let newState = profileReducer(state, action);

    //expectation

    expect (newState.posts.length).toBe(6);
});

