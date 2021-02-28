import React from 'react';
import { connect } from 'react-redux';
import { getUsers, subscribe, unsubscribe, setCurrentPageUsers, setTotalUsersCount} from "../../redux/usersReducer";
import Users from './Users';
import Preloader from '../Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirectComponent } from '../Redirect/withAuthRedirectComponent';
import {
    pageLoading,
    requestPage,
    requestUsers,
   subscriptionConfirm,
    totUsersCount,
    usersPageSize
} from "../../redux/selectors";


class UsersApiComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize); 

    }
    onBtnPageClick = (p) => {
        this.props.getUsers(p, this.props.pageSize);
    }

    render() {
        return <>
            <div>{this.props.isLoading ? <Preloader /> : 
            <Users 
            usersPage={this.props.usersPage}
            pageSize={this.props.pageSize} 
            totalUsersCount={this.props.totalUsersCount} 
            currentPage={this.props.currentPage} 
            subscribe={this.props.subscribe}
            unsubscribe={this.props.unsubscribe}
            onBtnPageClick={this.onBtnPageClick} 
            setCurrentPageUsers={this.props.setCurrentPageUsers}
            setTotalUsersCount={this.props.setTotalUsersCount}
            subscriptionProcessed={this.props.subscriptionProcessed}
            />}
            </div>
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        usersPage: requestUsers(state),
        pageSize: usersPageSize(state),
        totalUsersCount: totUsersCount(state),
        currentPage: requestPage(state),
        isLoading: pageLoading(state),
        subscriptionProcessed : subscriptionConfirm(state)
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => { dispatch(followAC(userID)); },
//         unfollow: (userID) => { dispatch(unfollowAC(userID)) },
//         setUsers: (users) => { dispatch(setUsersAC(users)) },
//         setCurrentPageUsers: (pageNumber) => { dispatch(setCurrentPageAC(pageNumber)) },
//         setTotalUsersCount: (totalcount) => { dispatch(setTotalUsersCountAC(totalcount)) },
//         toggleIsLoading: (isloading) => {dispatch(isLoadingAC(isloading))}
//     }
// }


export default compose( connect(mapStateToProps, {
    getUsers,
    subscribe,
    unsubscribe,
    setCurrentPageUsers, setTotalUsersCount
}), withAuthRedirectComponent)(UsersApiComponent);
