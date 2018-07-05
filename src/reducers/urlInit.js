
const initialState = {
    baseUrl:"",
}

export default function urlInit (state = initialState, action) {
    switch (action.type){
        case 'hh':
            return Object.assign({},{
                ...state,
                baseUrl:'ddd'
            })
        default:
            return state
    }
}