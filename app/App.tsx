/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
// import RootStack from './screens/Login';
import RootStack from './router';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <RootStack />
        );
    }
}