import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actionIndex';
import {bindActionCreators} from 'redux';
import HomePage from '../compoments/HomePage';

const mapStateToProps = (state) => ({
    route:state.nav,
    homeDetail:state.homeDetail
});

const mapDispatchToProps = (dispatch) => ({
    actions:bindActionCreators(actions,dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(HomePage)