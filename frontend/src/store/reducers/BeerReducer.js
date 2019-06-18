// //import everything from actions.js
// import * as actions from '../actions/actions'

import { FETCH_BEERS } from "../actions/actions";



const initialState = {
    beers: [
        { id: 1, name: 'Skol', tagline: 'Desce Redondo' },
        { id: 2, name: 'Brahma', tagline: 'A numero 1' },
    ]
}

 const beerReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case FETCH_BEERS:
            return {
                ...state,
                beers: [...state.beers,
                    { id: 2, name: 'Bavaria', tagline: 'A numero 0' },
                ]
                  
            }
        default:
            return state
    }
}

export default beerReducer
