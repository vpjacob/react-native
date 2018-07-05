/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import createStore from './src/store/createStore';

export const store = createStore();
import {Provider} from 'react-redux';
import AppWithNavitionState from './src/screen/AppWithNavigationState';
import React, {Component} from 'react';
import * as appConfig from './src/config/appConfig';

type Props = {};
export default class App extends Component<Props> {

    componentWillMount() {
        // appConfig.initAppNativeStatusBarHeight();
    }

    render() {
        return (
            <Provider store={store}>
                <AppWithNavitionState/>
            </Provider>
        );
    }
}


