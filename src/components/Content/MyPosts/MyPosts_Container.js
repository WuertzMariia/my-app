import { actioncreatorAddPost, actioncreatorPostTextareaChanged } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        // updatetextarea: (new_value) => {dispatch(actioncreatorPostTextareaChanged(new_value));},
      //  updateaddPost: (value) => {
         //   dispatch(actioncreatorAddPost(value));
        // let empty="";
        // dispatch(actioncreatorPostTextareaChanged(empty));
      //  }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts); 
export default MyPostsContainer;