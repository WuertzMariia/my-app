import React from "react";
import Content from "./Content";
import {connect} from "react-redux";
import {getUserProfile, updateUserStatus, getCurrentUserStatus} from "./../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirectComponent} from "../Redirect/withAuthRedirectComponent";
import {compose} from "redux";
import {savePhoto, setProfileData} from "../../redux/profileReducer";


class Content_Container extends React.Component {
refreshProfile () {

    let userId = this.props.match.params.userId;
    if (!userId && this.props.isAuth) {
        userId = this.props.authorized_userId;
    }
    this.props.getUserProfile(userId);
    this.props.getCurrentUserStatus(userId);
}
    componentDidMount() {
this.refreshProfile();
    }

     componentDidUpdate (prevProps, prevState,snapshot) {

    if(prevProps.match.params.userId != this.props.match.params.userId) {
        this.refreshProfile();alert("refreshed");
    }


    }

    render() {

        return (<div>
            <Content userId={this.props.userId} savePhoto={this.props.savePhoto}{...this.props} isOwner={!this.props.match.params.userId} profile={this.props.profile} status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}/>
        </div>)
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorized_userId: state.auth.data.userId,
    isAuth: state.auth.data.isAuth,
    userId: state.auth.data.userId
});

export default compose(connect(mapStateToProps, {setProfileData, savePhoto, getUserProfile, updateUserStatus, getCurrentUserStatus}),
    withRouter,
    withAuthRedirectComponent)
(Content_Container)

//  let authorizedComponent = withAuthRedirectComponent(Content_Container);
// let withRouter_Content_Container = withRouter(authorizedComponent);
// export default  connect(mapStateToProps, {getUserProfile})(withRouter_Content_Container);