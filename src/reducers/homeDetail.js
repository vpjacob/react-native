import _ from 'lodash'

const initialState = {
    city:'china',city_id:'hh'
}

const act = (state,action) => {
    console.log("")
    const {city,city_id,ip} = action.data;
    return _.assign({},{
        ...state,city,city_id,ip
    })
}

const bannerImg = (state,action) => {
    console.log("")
    let carouselList = JSON.parse(action.formDataset.carouselList);
    _.map(carouselList,(item,index)=>{
        // console.log(item.image_url+index)
        item.image_url = 'http://www.ppke.cn' + item.image_url
        return item
    })
    return _.assign({},{
        ...state,carouselList
    })
}

export default function homeDetail (state = initialState, action) {
    switch (action.type){
        case 'HAHA':
            return act(state,action);
        case 'BANNER':
            return bannerImg(state,action)
        default:
         return state;
    }

    return state;
}