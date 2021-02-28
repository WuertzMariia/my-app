import React from 'react';
import {Form, Field} from 'react-final-form';

import {addNewPost} from "../../../redux/profileReducer";
import {connect} from "react-redux";


const MyPostsFieldForm = (props) => {

    return (<div>

        {/*
        <textarea  onChange = { (e) => props.postareaChange(e)} placeholder="Enter your new post here" value={props.newposttext}></textarea>

        <div><button onClick={props.addPost}>Add Post</button>
            <button>Remove</button></div>
    */}
        <Form
            onSubmit={(values) => {

                props.onSubmitForm(values.new_post);
            }}
            keepDirtyOnReinitialize
            validate={values => {
                const errors = {}
                if (!values.new_post) {
                    errors.new_post = "Required"
                }

                return errors;
            }}
            render={({handleSubmit, form}) => (
                <form onSubmit={(event) => {
                   

       const promise = handleSubmit(event);

       promise && promise.then(() => {

         form.setConfig('keepDirtyOnReinitialize', false);

         form.reset();

         form.setConfig('keepDirtyOnReinitialize', true);

       })

      return promise;

      }}

                  >
                    <div>
                        <Field name="new_post">
                            {({input, meta}) => (
                                <div>
                                    <label></label>

                                    <input {...input} type="text" placeholder="Your new post"/>
                                    {/* {meta.error && meta.touched && <span>{meta.error}</span>} */}
                                </div>
                            )}
                        </Field>

                        <input name={"submit"} type={"submit"} value={"Send"}/>
                        {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                    </div>
                </form>
            )}
        />

    </div>)
}


class MyPostsFieldFormContainer extends React.Component {
    onSubmitForm = (values) => {
        this.props.addNewPost(values);
    }

    render() {
        return (<div>
            <MyPostsFieldForm onSubmitForm={this.onSubmitForm}/>

        </div>)
    }
}

let mapStateToProps = (state) => {

}
export default connect(mapStateToProps, {addNewPost})(MyPostsFieldFormContainer);