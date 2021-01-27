import React from 'react';
import classes from './auth.module.css';
import Button from "../../components/UI/Button/button";
import Input from "../../components/UI/Input/Input";
import Is from 'is_js';
import {connect} from 'react-redux';
import {auth} from "../../store/actions/auth";


class Auth extends React.Component {

    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Enter correct email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Pass word',
                errorMessage: 'Enter correct password',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    loginHandler = () => {
        this.props.auth(
            this.state.formControls.email.value,
            this.state.formControls.password.value,
            true
        )
        // try {
        //     const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDPJySe0OGXPsYd9Xtea5mUC9MgR3zDXGQ', authData)
        //     console.log(response.data);
        // } catch (e) {
        //     console.log(e);
        // }
    }

    registerHandler = () => {
        this.props.auth(
            this.state.formControls.email.value,
            this.state.formControls.password.value,
            false
        )

    }

    submitHandler = event => {
        event.preventDefault();
    }

    validateControl(value, validation) {
        if(!validation) {
            return true;
        }

        let isValid = true;
        if(validation.required) {
            isValid = value.trim() !== '' && isValid
        }
        if(validation.email) {
            isValid = Is.email(value) && isValid
        }
        if(validation.minLength) {
            isValid = value.length >= validation.minLength && isValid;
        }

        return isValid;
    }

    onChangeHandler = (event, controlName) => {
        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};
        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);
        formControls[controlName] = control;

        let isFormValid = true;
        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid;
        })

        this.setState({
            formControls,
            isFormValid
        })
    }

    renderInputs() {
        const inputs = Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
        return inputs;
    }

    render() {
        return (
            <div className={classes.auth}>
                <div>
                    <h1>Autentefication</h1>
                    <form
                        className={classes.authForm}
                        onSubmit={this.submitHandler}>

                        {this.renderInputs()}

                        <Button
                            disabled={!this.state.isFormValid}
                            type="success"
                            onClick={this.loginHandler}>Enter</Button>

                        <Button
                            type="primary"
                            onClick={this.registerHandler}>Register</Button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
    }
}

export default connect(null, mapDispatchToProps)(Auth);