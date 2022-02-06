import React from 'react';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'

function HomePage(props) {


    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/'><p>This is the HOMEPAGE</p></Route>
                    <Route path='/join' component={RoomJoinPage} ></Route>
                    <Route path='/create' component={CreateRoomPage}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default HomePage;