import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        dialogsPage:
            {
                messages:[
                    {id: 1, message: 'Hi'},
                    {id: 2, message: 'How are you?'},
                    {id: 3, message: 'You'},
                    {id: 4, message: 'You'},
                    {id: 5, message: 'Yooo'},
                    {id: 6, message: 'Yooo'}
                ],
                dialogs:[
                    {id: 1, name: 'Dimych'},
                    {id: 2, name: 'Andrey'},
                    {id: 3, name: 'Sveta'},
                    {id: 4, name: 'Sasha'},
                    {id: 5, name: 'Runner'},
                    {id: 6, name: 'Valera'}
                ],
                newMessageBody: ""
            },
        profilePage:
            {
                posts:[
                    {id: 1, message: 'Hi, how are you?', likesCount: 10},
                    {id: 2, message: 'It is my first post', likesCount: 0},
                    {id: 3, message: 'Sveta', likesCount: 14},
                    {id: 4, message: 'Sasha', likesCount: 5},
                    {id: 5, message: 'Runner', likesCount: 4},
                    {id: 6, message: 'Valera', likesCount: 23}
                ],
                newPostText:'it-kamas',

            }
    },

    _callSubscriber() {
        console.log('state was changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель патерн observer  publisher subscriber
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);

    }
}



export default store;

window.store = store;