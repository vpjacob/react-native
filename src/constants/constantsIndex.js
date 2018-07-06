import {
    PixelRatio,
    Dimensions,
    Platform,
    StatusBar,
    StatusBarIOS,
} from 'react-native';
import * as appConfig from "../config/appConfig";

export const density = PixelRatio.get() > 2 ? 2 : PixelRatio.get();
export const fixPx = (_px) => {
    return PixelRatio.roundToNearestPixel(_px / density);
};

export const fixPxFont = (_px) => {
    return  PixelRatio.get()/PixelRatio.getFontScale();
};

export const footIconWidth = fixPx(40);
export const footTabHeight = fixPx(100);
export const footTabFontsize = fixPx(24);

/** 屏幕宽度 */
export const width = Dimensions.get('window').width;
/** 屏幕高度 */

export const height = Dimensions.get('window').height;

export const statusHeight = appConfig.appStatusBarHeight;

export const pageHeight = height - statusHeight - footTabHeight;


/** 屏幕内边距22 */
export const screenPadding = fixPx(22)



export const kHeight = height - fixPx(226)

export const messageBarHeight = fixPx(110)
export const messageBarHeightOrder = fixPx(50)

export const kHeightNoTabBar = height - fixPx(128)

export const kHeightContentInfo = height - fixPx(228)
/** 标题文字大小 */
export const titleFontSize = fixPx(34)


/** 消息条高度 */
export const msgBarHeight = fixPx(60)

/** 主要文字大小28 */
export const majorFontSize = fixPx(28)

/** 次要文字大小 24*/
export const minorFontSize = fixPx(24)

/** NavBar高度 */
export const navBarHeightAndroid = fixPx(130)

export const navBarHeightIOS = fixPx(130) //130 175

export const navBarHeight = Platform.OS === 'ios' ? navBarHeightIOS : navBarHeightAndroid

export const topStartPosition =  Platform.OS === 'ios' ? navBarHeightIOS : navBarHeightAndroid-fixPx(50)

/** 充值图标内边距 */
export const payIconPadding = fixPx(50)


/** 底部投注条高度 */
export const footBtHeight = fixPx(98)



/** 主色 */
export const majorColor = '#e93e44';

/** 副色 */
export const minorColor = '#e84a2e';

/** 主文字 */
export const majorTextColor = '#3c3c3c';

/** 辅助文字 */
export const assistTextColor = '#9c9c9c';

/** 次要文字 */
export const minorTextColor = '#6c6c6c';

export const moneySelectColor = "#e93e44";

export const sectionColor = '#1E90FF';
export const liveHeadColor = "#5fc468";
export const footTabActive = sectionColor;
export const footTabInActive = '#979797';


/**
 * title背景色
 */
export const grayBg="#eeefe9";

/** 底色 */
export const bgColor = '#f6f6f6';

/** 按钮不可点击的颜色 */
export const unClickAbleColor = '#eeeeee';

/** 线条颜色 */
export const lnColor = '#efefef';

/** 线条颜色 */
export const divideLnColor = '#efefef';

/** 线条颜色深 */
export const darkDivideLnColor = '#dfdfdf';

/**苹果蓝 */
export const blueBtn = "#007AFF";

/**蓝色背景 */
export const blueBg = "#1E90FF";

/** 一些通用的颜色 */

export const red = "#d81e2c";
export const dataGreen = "#00cf5c";
export const blue = "#18adff";
export const dataBlue = "#18adff";
export const dataRed = "#d81e2c";
export const green = "#00cf5c";

export const dataYellow = "#ffc028";
export const dataPurple= "#cd7eff";
export const dataDarkOrange = "#ff8a5c";

export const white = '#ffffff';

export const transparent = "#00000000";

/** 快3按钮颜色 */
export const k3BtnColor = '#6a91ff';

export const redBallColor="#EF2C05";
/** 快3按钮边框颜色 */
export const k3LnColor = redBallColor;
/** 快3选中按钮边框颜色 */
export const k3SelectLnColor = '#6a91ff';
/** 快3选中按钮边框颜色 */
export const k3SelectBtColor = '#6a91ff';
export const k3BgColor = '#6a91ff';




export const redText = "#eb646b";
export const blueBallColor="#007bff";

export const tableRecColor1="#8dbdbd";
export const tableRecColor2="#ccb58b";

export const tableRecSSCColor1 = "#afc6c7";
export const tableRecSSCColor2 = "#dcc392";
export const tableRecSSCColor3 = "#b4d6c5";
export const tableRecSSCColor4 = "#afc6c7";
export const tableRecSSCColor5 = "#f0777d";
/**比分直播字体颜色值*/
export const leagueTimeColor='#8c8c8c';
export const dateColor='#3c3c3c';
export const bfGreen='#00a551';
export const bfGray='#6C6C6C';
export const matchDescColor='#e93f44';
/**赛事分析字体颜色及大小*/
export const navBgColor = "rgb(57,65,78)";
export const scrollTabBg = 'rgb(255,198,33)';
export const analysisDescBgColor = "#e2e5ea";
export const together = "#eaeaea";
export const partingLine = "#d9d9d9";
export const backgColor= "#0066cd";

export const playTypeBgColor = "#7ba7fe";
export const chuanTypeBgColor = "#ffb369";
