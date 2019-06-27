// //import everything from actions.js
// import * as actions from '../actions/actions'
import { FETCH_BEERS, ADD_BEER, DELETE_BEER } from "../actions/actions";



export const initialState = {
    beers: [],
    FavoritesBeer: [],
    FeaturedBeers: []
}

 const beerState = ( state = initialState, action ) => {
    switch (action.type) {
        case FETCH_BEERS:
            return {
                beers: action.payload
                  
                }
        case ADD_BEER:
            return {
                ...state,
                beers: [...state.beers,{...action.id}]
            }
        case DELETE_BEER:
            console.log("Bahia minha vida Deleted", action)
            const newState = state.beers.filter(item => item.id !== action.id)
            return {
                ...state,
                beers: newState
            }    
        default:
            return state
    }
}

export default beerState
