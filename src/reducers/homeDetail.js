import _ from 'lodash'

const initialState = {
    city:'china',city_id:'hh'
}

const act = (state,action) => {
    const {city,city_id,ip} = action.data
    return _.assign({},{
        ...state,city,city_id,ip
    })
}

export default function homeDetail (state = initialState, action) {
    switch (action.type){
        case 'HAHA':
         return act(state,action);
        default:
         return state;
    }
    return state;
}