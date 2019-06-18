//ACTION TYPES 
export const FETCH_BEERS = 'FETCH_BEERS'
export const ADD_BEER = 'ADD_BEER'
export const DELETE_BEER = 'DELETE_BEER'
export const UPDATE_BEER = 'UPDATE_BEER'

export const addBeer = (beer) => {
    return {
        type: ADD_BEER,
        beer
    }
}


export const fetchBeers = beers => ({
    type: FETCH_BEERS,
    beers: beers
})