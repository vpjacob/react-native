import {StyleSheet} from 'react-native';
import * as c from "../constants/constantsIndex";


export const styles = StyleSheet.create({
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
        position: 'absolute',
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
})