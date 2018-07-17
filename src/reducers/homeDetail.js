import _ from 'lodash'

const initialState = {
    city:'china'
}

const act = (state,action) => {
    const {city} = action.data
    return _.assign({},{
        ...state,city
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