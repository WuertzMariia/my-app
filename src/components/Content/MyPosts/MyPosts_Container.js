import { actioncreatorAddPost, actioncreatorPostTextareaChanged } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
const MyPostsContainer = connect(mapStateToProps, {})(MyPosts);
export default MyPostsContainer;