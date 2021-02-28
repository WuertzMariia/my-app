import React from "react";
import c from './App.module.css';
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'
import Music from './components/Music/Music';
import News from './components/News/News';
import {Route, withRouter} from "react-router-dom";
import Dialogs_Container from "./components/Dialogs/Dialogs_Container";
import UsersApiComponent from "./components/Users/Users_Container";
import Content_Container from "./components/Content/Content_Container";
import Header_Container from "./components/Header/Header_Container";
import Login from "./components/Login/Login";
import { connect } from "react-redux";

import { compose } from "redux";
import {initialization_App} from "./redux/appReducer";
import Preloader from "./components/Preloader/Preloader";
class App extends React.Component {
    componentDidMount = () => {

        this.props.initialization_App();
    }
render () {
    if(!this.props.initialized_app) {
        debugger;
        return <Preloader />
    }
    return (

            <div className={c.App}>
                <Header_Container/>
            
                <Sidebar state={this.props.state}/>
            <Route path="/profile/:userId?" render={() => <Content_Container/>}/>
            <Route path="/messages" render={() => <Dialogs_Container />}/>
            <Route path="/news" render={() => <News />}/>
            <Route path="/music" render={() => <Music />}/>
            <Route path="/users" render={() => <UsersApiComponent/>}/>
            <Route path="/login" render={() => <Login />}/>
            <Footer/>
            </div>
    );}
}

let mapStateToProps = (state) => ({
    state: state,
    initialized_app: state.appMain.initialized
})

export default compose(withRouter, connect(mapStateToProps, {initialization_App}))(App);
