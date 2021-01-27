import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/preloader/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "../../components/common/preloader/FormsControls/FormsControls.module.css"
const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type:"password" })}
            {createField(null, "rememberMe", [], Input, {type:"checkbox" }, "remember Me")}
            {captchaUrl && <img src={captchaUrl}  />}
            {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {}) }

            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div><button>Отправить</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/content"} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
};
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps,{login})(Login);