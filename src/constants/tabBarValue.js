import AppPage from '../compoments/MinePage';
import HomePageContainer from '../container/HomePageContainer';

export const tabBarButton = [
    {
        'tabName': '首页',
        "tabRoutes": 'route.HomePage',
        "tabRoutesContains": HomePageContainer,
        "tabIconNormal":"homeIconNormal",
        "tabIconSelected":'homeIconSelected',

    },
    {
        'tabName': '我的',
        "tabRoutes": 'route.AppPage',
        "tabRoutesContains": AppPage,
        'tabIconNormal':"userInfoIconNormal",
        "tabIconSelected":'userInfoIconSelected',

    }
]