import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    console.log(props.message);

    return (
    <div className={s.item}>
        <div>post1<br/>
            <div>
                {props.message}
            </div>
            <div>
                Likes: <span>{props.likesCount}</span>
            </div>
        </div>
    </div>
    )
}

export default Post;