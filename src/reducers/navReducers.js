import {AppRoute} from "../screen/screenIndex";
const recentlyVisitedRoutes = new Set();//防止連點，多次navigate，增加此判斷
const navReducers = (state, action) => {
    if (action.type === 'Navigation/NAVIGATE') {
        //注释的为singleTop模式
        // if(_.isEqual(state.routes[state.routes.length-1].routeName,action.routeName)){
        //     return state;
        // }
        if (recentlyVisitedRoutes.has(action.routeName)) {
            return state;
        }
        recentlyVisitedRoutes.add(action.routeName);
        setTimeout(() => {
            recentlyVisitedRoutes.delete(action.routeName);
        }, 400);
    }
    const newState = AppRoute.router.getStateForAction(action, state);
    return newState || state;
};

export default navReducers;