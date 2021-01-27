import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'


const MyPosts = (props) => {

    let postElements = props.postsData.postsData.map(post => <Post key={post.id} message={post.message} id={post.id} likesCount={post.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        // let text = newPostElement.current.value;
        // props.addPost();
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', text});
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <>
            <div className={classes.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.postsData.newPostText}/>
                </div>
                <button onClick={addPost}>add post</button>
                <div className={classes.posts}>
                    {postElements}
                </div>
            </div>
        </>
    )
}

export default MyPosts;