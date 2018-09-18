import _ from 'lodash'
import {iconList} from "../actions/actionIndex";

const initialState = {
    city: 'china', city_id: 'hh'
}

const act = (state, action) => {
    console.log("")
    const {city, city_id, ip} = action.data;
    return _.assign({}, {
        ...state, city, city_id, ip
    })
}

const bannerImg = (state, action) => {
    let carouselList = JSON.parse(action.formDataset.carouselList);
    _.map(carouselList, (item, index) => {
        item.image_url = 'http://www.ppke.cn' + item.image_url
        return item
    });
    return _.assign({}, {
        ...state, carouselList
    })
};

const iconListaction = (state,action) => {

  let companyType = JSON.parse(action.formDataset.companyType)

    return _.assign({},{
        ...state,companyType
    })
};

export default function homeDetail(state = initialState, action) {
    switch (action.type) {
        case 'HAHA':
            return act(state, action);
        case 'BANNER':
            return bannerImg(state, action);
        case 'ICONLIST':
            return iconListaction(state,action);
        default:
            return state;
    }

    return state;
}