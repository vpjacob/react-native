import React from 'react';
import {StackNavigator,TabNavigator} from 'react-navigation';
import HomePage from '../compoments/HomePage';
import AppPage from '../compoments/MinePage';
import {tabBarButton} from '../constants/tabBarValue';
import * as _ from 'lodash';
import {DeviceEventEmitter} from "react-native";
import TabBarText from "../weight/TabBarText";
import RootPage from "../compoments/RootPage";
import * as c from "../constants/constantsIndex";
import TabBarItem from '../weight/TabBarItem';
import HomeDetailPage from "../container/HomeDetailPageContainer";

const TabNavigtatorConfig = {
    tabBarPosition:'bottom',
    swipeEnabled:false,
    animationEnabled:false,
    backBehavior:'none',
    lazy:true,
    tabBarOptions:{
        showIcon:true,
        indicatorStyle:{
            height:0,
        },
        activeTintColor:c.footTabActive,
        inactiveTintColor:c.footTabInActive,
        style: {
            height: c.footTabHeight,
            backgroundColor: c.white,
            paddingBottom:c.fixPx(10)
        },
        labelStyle: {//icon的均分
            fontSize: c.footTabFontsize, // 文字大小
        },
        iconStyle: {
            flexDirection: 'row',
        },
        tabStyle: {
            height: c.footTabHeight,
        },

    }

}

const onTabClick=(data)=>{//该方法设置后会导致原来的跳转失效
    const {jumpToIndex,scene} = data;
    const {index} = scene;
    DeviceEventEmitter.emit(MAIN_TAB_CHANGE,data);
    jumpToIndex(index);
};


const TabNavigation = _.reduce(tabBarButton,(result,item,i)=>{
    return Object.assign(result,{[item.tabRoutes]:{
        screen: item.tabRoutesContains,
        navigationOptions:{
            headerTitle: item.tabName,
            tabBarOnPress:onTabClick,
            tabBarLabel: ((tintColor, focused)=>(<TabBarText focused={focused}
                                                             item={item}
                                                             tintColor={tintColor}/>)),
            tabBarIcon: ({tintColor, focused}) => (
                <TabBarItem
                    focused={focused}
                    normalImage={item.tabIconNormal}
                    selectedImage={item.tabIconSelected}
                />
            )},

    }})
},{});

const MAIN_TAB_CHANGE = "MAIN_TAB_CHANGE";

const MainScreenNavigator = TabNavigator(TabNavigation,TabNavigtatorConfig);

export const AppRouteLists = {
    'route.Main': {screen: MainScreenNavigator,headerMode:'float'},
    'route.AppPage': {screen:AppPage},
    'route.HomePage': {screen:HomePage},
    'route.Root':{screen:RootPage},
    'route.HomeDetailPage':{screen:HomeDetailPage},

};

const stackNavigatorConfig = {
    initialRouteName: 'route.Root',
    headerMode:'none',
    gesturesEnabled:false,
    mode: 'card',
};

export const AppRoute = StackNavigator(AppRouteLists,stackNavigatorConfig);

