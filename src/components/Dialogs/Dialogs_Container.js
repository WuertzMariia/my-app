// import { actioncreatorAddMessage, actioncreatorUpdateTextareaDialog } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import { compose } from 'redux';
import { withAuthRedirectComponent } from '../Redirect/withAuthRedirectComponent';



let mapStateToProps = (state) => {
   return {
messagesPage: state.messagesPage
   }
  
}

let mapDispatchToProps = (dispatch) => {
   return {
/*
   
   updateMessArea: (text) => {dispatch(actioncreatorUpdateTextareaDialog(text)); },
   addNewMessage: () => {
      dispatch(actioncreatorAddMessage()); 
      let empty="";
      dispatch(actioncreatorUpdateTextareaDialog(empty));}*/

   }}


   const Dialogs_Container= compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirectComponent)(Dialogs)

// const Dialogs_Container = connect(mapStateToProps, mapDispatchToProps)(Dialogs); 

export default Dialogs_Container;