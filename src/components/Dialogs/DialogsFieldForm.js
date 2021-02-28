import React from 'react';
import {connect} from "react-redux";
import { Form, Field } from 'react-final-form'
import {sendMessage} from "../../redux/dialogsReducer";

const DialogForm = (props) => {
    return (<div>
        <Form

            onSubmit={(values) => props.onButtonsSend(values.message) }
            validate={values => {
           
                const errors = {}
                if (!values.message) {
                    errors.message = ''
                }
                return errors
            }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                  <label> <Field name="message">
                        {({ input, meta }) => (
                            <div>
                                <label></label>
                                <input {...input} value={props.message} type="text" placeholder="your message" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field >
                    </label> 
                        <button type="submit" disabled={submitting || pristine}>
              Send
            </button>

                    
                </form>
            )}
        />
    </div>)
}

class DialogsFieldFormContainer extends React.Component {

    onButtonSend = (message) => {
        this.props.sendMessage(message);

    }
    render() {
        return (<div>
<DialogForm onButtonsSend={this.onButtonSend}/>
        </div>)
    }

}
let mapStateToProps = (state) => {

}
export default connect(mapStateToProps, {sendMessage})(DialogsFieldFormContainer)