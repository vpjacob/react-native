import AppPage from '../compoments/MinePage';
import HomePage from '../compoments/HomePage';

export const tabBarButton = [
    {
        'tabName': '首页',
        "tabRoutes": 'route.HomePage',
        "tabRoutesContains": HomePage,
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