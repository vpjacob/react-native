import React,{Component} from 'react';
import {Image,Platform} from 'react-native';
import * as img from "../img/imgIndex";
import * as c from "../constants/constantsIndex";
import {MainScreentNavigator} from "../screen/screenIndex";
export default class TabBarItem extends Component {

    render() {
        const {focused,normalImage,selectedImage,tintColor } = this.props
        return(
            <Image source={focused? img[selectedImage] : img[normalImage]}
                   style={ {
                       width:c.footIconWidth,
                       height:c.footIconWidth,
                       alignSelf:"center",
                       marginRight:Platform.OS === 'ios' ? c.fixPx(0) :c.fixPx(10)
                   } }
            />
        )
    }

}