import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addNavigationHelpers} from 'react-navigation';
import {createReactNavigationReduxMiddleware,createReduxBoundAddListener} from 'react-navigation-redux-helpers';
import {AppRoute} from './screenIndex';

createReactNavigationReduxMiddleware('root',state => state.nav);
const addListener = createReduxBoundAddListener('root');

class AppWithNavigationState extends Component {
    render () {
        const {dispatch,nav} = this.props;
        return (
          <AppRoute navigator={addNavigationHelpers({
              dispatch:dispatch,
              state:nav,
              addListener
          })}
          />
        );
    }
}

export default connect(state => ({nav:state.nav}))(AppWithNavigationState);
