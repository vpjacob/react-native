import React, { Component } from "react";
import {Image, Modal, Text, TouchableOpacity,Animated, View,StyleSheet} from "react-native";
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
            <View style={{height: c.height,}}>
                {this.renderTitle()}
                {this.renderBackBtn()}
                {this.renderMenu()}
                {this.renderShaiXuanTitle()}

                {this.props.children}
            </View>
        )
    }

    renderShaiXuanTitle=()=>{
        const {shaixuanTitle,shaixuanAction}=this.props
        return shaixuanTitle?(
            <TouchableOpacity style={styles.shaixuanTitle}
                              onPress={() => shaixuanAction()}>
                <View style={{marginTop:c.navBarHeight/2}}>
                    <View><Image source={imgs.imgJcShai}  /></View>
                </View>
            </TouchableOpacity>) : null
    }

    renderMenu=()=>{
        const {rightMenuBtn,titleMenu,menuClick}=this.props
        return rightMenuBtn||titleMenu?<TouchableOpacity style={styles.helperTitle} onPress={menuClick?menuClick:() => { this.refs.menuPopup&&this.refs.menuPopup.show() }} >
            {rightMenuBtn||<Text style={{fontWeight:'bold',fontSize:c.majorFontSize,color:c.white,marginTop:c.navBarHeight/2}}>{titleMenu}</Text>}
        </TouchableOpacity>:null
    }

    renderTitle=()=>{
        const {customTitle,position}=this.props
        return  <View style={[styles.navBar,position=="left"?{justifyContent:'flex-start',paddingLeft:c.fixPx(140)}:{}]}>
            {customTitle||this.renderNormalTitle()}
        </View>
    }

    renderBackBtn=()=>{
        const {routes,handBack}=this.props
        return routes.length === 0 ||
            <TouchableOpacity onPress={ handBack?handBack : this.goBack }
                              style={styles.navBarBackIOS}>
                <Image style={styles.navBarBackImageIos} source={imgs.imgBackArrow} />
            </TouchableOpacity>
    }

    renderNormalTitle=()=>{
        const {title}=this.props
        return(<Text style={[styles.navBarTitleFont]}>{title}</Text>)
    }

}

export default connect(state => ({
    routes: state.nav.routes
}), dispatch => ({}))(FakeNavBar);


const styles = StyleSheet.create({
    viewContainer: {
        height: c.height,
    },
    midContainer: {
        marginTop: c.fixPx(30)
    },
    navBar: {
        backgroundColor: c.blueBg,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: c.width,
        height: c.navBarHeight,
    },
    navBarTitleFont: {
        fontSize: c.titleFontSize,
        color: c.white,
        alignSelf: "center",
        textAlign: "center",
        fontWeight: 'bold',
        marginTop: c.fixPx(30),
    },
    navBarBackIOS: {
        position: 'absolute',
        left: 0,
        top: 0,
        justifyContent: 'flex-end',
        height: c.navBarHeight,
        width: c.fixPx(100),
        marginTop: c.fixPx(48),

    },
    navBarBackImageIos: {
        flex: 1,
        // position: 'absolute',
        width: c.fixPx(40),
        height: c.fixPx(40),
        resizeMode: 'contain',
        bottom: c.screenPadding + c.fixPx(5),
        left: c.screenPadding,
    },


    // 标题数为2
    navBarDoubleGroup: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    navBarDoubleGroupSelected: {
        backgroundColor: c.white,
    },
    navBarDoubleGroupTxtSelected: {
        color: c.majorColor,
    },
    navBarDoubleGroupTxt: {
        color: c.white,
        fontSize: c.minorFontSize,
    },
    groupLeft: {
        // borderWidth: c.fixPx(1),
        borderTopWidth: c.fixPx(1),
        borderBottomWidth: c.fixPx(1),
        borderLeftWidth: c.fixPx(1),
        // borderRightWidth: c.fixPx(1),
        borderColor: c.white,
        borderTopLeftRadius: c.fixPx(30),
        borderBottomLeftRadius: c.fixPx(30),
        justifyContent: 'space-around',
        alignItems: 'center',
        width: c.fixPx(140),
        height: c.fixPx(60),

    },
    groupRight: {
        borderTopWidth: c.fixPx(1),
        borderBottomWidth: c.fixPx(1),
        borderRightWidth: c.fixPx(1),
        borderColor: c.white,
        borderTopRightRadius: c.fixPx(30),
        borderBottomRightRadius: c.fixPx(30),
        justifyContent: 'space-around',
        alignItems: 'center',
        width: c.fixPx(140),
        height: c.fixPx(60),
    },

    //标题数很多
    titleTouchable: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: c.fixPx(10),
        justifyContent: 'center',
        marginBottom: c.fixPx(20),
    },
    helperTitle: {
        position: 'absolute',
        right: 0,
        top: 0,
        // backgroundColor:'red',
        paddingTop: c.fixPx(5),
        paddingBottom: c.fixPx(30),
        paddingLeft: c.fixPx(40),
        paddingRight: c.fixPx(15),
    },
    shaixuanTitle: {
        position: 'absolute',
        right: c.screenPadding + c.fixPx(70),
        top: 0,
        paddingTop: c.fixPx(5),
        paddingBottom: c.fixPx(30),
        paddingLeft: c.fixPx(30),
        paddingRight: c.fixPx(20),

    },
});
