import React, {PureComponent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/preloader/FormsControls/FormsControls";

class MyPosts extends PureComponent {

    render() {
        console.log("Render");
        let postsElements = this.props.posts.map(p =>
            <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

        let newPostElement = React.createRef();

        let onAddPost = (values) => {
            this.props.addPost(values.newPostText);
        }


        return (
            <div className={s.postsBlock}>
                <div>
                    <h3> My posts </h3>
                    <AddNewPostFormRedux onSubmit={onAddPost}/>
                    <div className={s.posts}>
                        new post
                        {postsElements}
                    </div>
                </div>

            </div>
        )
    }
}

const maxLength10 = maxLengthCreator(10);
let AddNewPostForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} placeholder={"New messages"}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux =reduxForm({form: "ProfileAddNewPosForm"})(AddNewPostForm);


export default MyPosts;