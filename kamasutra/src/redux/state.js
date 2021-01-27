import img from "../media/ava.png";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'my post text 2', likesCount: 12},
                {id: 2, message: 'my post text 3', likesCount: 22}
            ],
            newPostText: 'it kamasutra'
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Dima1'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Slava'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Roman'}
            ],
            messageData: [
                {id: 1, message: 'text1 text text text text text text text', avatar: img, userName: 'uname1'},
                {id: 2, message: 'text2 text text text text text text text', avatar: img, userName: 'uname2'},
                {id: 3, message: 'text3 text text text text text text text', avatar: img, userName: 'uname3'},
                {id: 4, message: 'text4 text text text text text text text', avatar: img, userName: 'uname4'},
                {id: 5, message: 'text5 text text text text text text text', avatar: img, userName: 'uname5'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer; // observer / addEventListener
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }
}

export default store;



window.state = store._state



