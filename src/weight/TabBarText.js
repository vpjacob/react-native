import React,{Component} from 'react';
import {Text} from 'react-native';

export default class TabBarText extends Component{
    render(){
        const {item,tintColor } = this.props
        return(
            <Text style={{alignSelf:"center",
                alignItems:"center",
                color:tintColor.tintColor,
                alignContent:"center"}}>{item.tabName}</Text>
        )
    }
}