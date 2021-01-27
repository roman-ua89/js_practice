import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

    return (
        <>
            <div className={classes.item + ' clearfix'}>
                <div className={classes.itemPhoto}>

                </div>
                <div className={classes.itemText}>
                    {props.message}
                </div>
            </div>
        </>
    )
}

export default Post;