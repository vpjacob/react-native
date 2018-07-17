import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actionIndex';
import {bindActionCreators} from 'redux';
import HomeDetailPage from '../compoments/HomeDetailPage';

const mapStateToProps = (state) => ({
    route:state.nav,
    homeDetail:state.homeDetail
})

const mapDispatchToProps = (dispatch) => ({
    actions:bindActionCreators(actions,dispatch)
})

export default connect (mapStateToProps,mapDispatchToProps)(HomeDetailPage)