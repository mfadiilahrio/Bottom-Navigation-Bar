import React from 'react';
import RouteStack from './router';
import LoginScreen from './screens/LoginScreen';

let isLogin = true;
let content: JSX.Element;

export default class extends React.Component {
    render() {
        if (!isLogin) {
            content = <LoginScreen />
        } else {
            content = <RouteStack />
        }
        return (
            content
        );
    }
}