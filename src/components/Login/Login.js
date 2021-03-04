import React from 'react';
import c from './Login.module.css';
import {Form, Field} from 'react-final-form';
import {singInLogin} from '../../redux/authReducer';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


export const LoginForm = (props) => {
    return (
        <Form
            onSubmit={(values) => {
                props.onSubmitForm(values);
            }}

            validate={values => {
                const errors = {}
                if (!values.login) {
                    errors.login = "Required"
                }
                if (!values.password) {
                    errors.password = "Required"
                }
                return errors;
            }}
            render={({handleSubmit, form, meta, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit} className={c.transparent}>
                    <div className={c.form_inner}>
                        {/* //  + ' ' + (meta.error && meta.touched ? c.error_style: " ") */}

                        <h3>Sign In</h3>
                        {props.login_failed ?
                            <p className={c.failed_sing_in}>Sign in failed. Wrong E-Mail or password</p> : null}
                        <Field name="login">
                            {({input, meta}) => (
                                <div>
                                    <label>Login</label>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                    <input {...input} type="text" placeholder="Login"/>

                                </div>
                            )}
                        </Field>
                        <Field name="password">
                            {({input, meta}) => (
                                <div>
                                    <label>Password</label>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                    <input {...input} type="password" placeholder="Password"/>

                                </div>
                            )}
                        </Field>
                        <label>
                            <Field
                                name="remember_me"
                                component="input"
                                type="checkbox"
                                value={true}
                                id={"custom_checkbox"}
                            />{' '}
                            remember me
                        </label>
                        <input name={"submit"} type={"submit"} value={"submit"}/>
                    </div>
                </form>
            )}
        />
    )
}

const Login = (props) => {
    let onSubmitForm = (values) => {
        props.singInLogin(values);
    }
    if (props.isAuth) {
        return <Redirect from="/login" to="/profile"/>
    }
    return (
        <div>
            <LoginForm onSubmitForm={onSubmitForm} login_failed={props.login_failed}/>
        </div>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.data.isAuth,
    login_failed: state.auth.login_failed
})

export default connect(mapStateToProps, {singInLogin})(Login); 
