import React, { Component } from "react";
import {Image, Modal, Text, TouchableOpacity,Animated, View} from "react-native";
import {connect} from 'react-redux';
import * as imgs from '../img/imgIndex';
import fp, { reduce, get, sum, assoc, flow, map, filter, path, update ,flattenDeep, flatten,drop,head,chunk} from 'lodash/fp'
import * as c from "../constants/constantsIndex";
import * as _ from "lodash";

class FakeNavBar extends Component{
    constructor(){
        super();
        this.state = {
            animationType:'none',
            modalVisible: false,
            transparent: true,
        }
    }

    goBack = () => {
        const {navigation} = this.props;
        navigation.pop();
    }

    render(){
        return (
            <View>
                
            </View>
        )
    }

}


