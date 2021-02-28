import React from "react";
import Content from "./Content";
import { connect } from "react-redux";
import {getUserProfile, updateUserStatus, getCurrentUserStatus} from "./../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import {withAuthRedirectComponent} from "../Redirect/withAuthRedirectComponent";
import { compose } from "redux";



class Content_Container extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if(!userId && this.props.isAuth) {
            userId= this.props.authorized_userId; 
        }
        this.props.getUserProfile(userId);

        this.props.getCurrentUserStatus(userId);

    }
 
    render () {
        
        return (<div>
       <Content {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
        </div>)
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorized_userId: state.auth.data.userId,
    isAuth: state.auth.data.isAuth
}); 

export default  compose(connect(mapStateToProps, {getUserProfile, updateUserStatus, getCurrentUserStatus}),
withRouter,
withAuthRedirectComponent)
(Content_Container)

//  let authorizedComponent = withAuthRedirectComponent(Content_Container);
// let withRouter_Content_Container = withRouter(authorizedComponent);
// export default  connect(mapStateToProps, {getUserProfile})(withRouter_Content_Container);