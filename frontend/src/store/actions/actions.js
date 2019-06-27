//ACTION TYPES 
export const FETCH_BEERS = 'FETCH_BEERS'
export const ADD_BEER = 'ADD_BEER'
export const DELETE_BEER = 'DELETE_BEER'
export const UPDATE_BEER = 'UPDATE_BEER'
export const ADD_FAVORITES = 'ADD_FAVORITES'

export const addBeer = (id, name, tagline) => {
    return {
        type: ADD_BEER,
        id,
        name,
        tagline
    }
}



export const fetchBeers = () => dispatch => {
    fetch('https://api.punkapi.com/v2/beers?page=1&per_page=4')
        .then(res => res.json())
        .then(beers => {
            return dispatch({
                type: FETCH_BEERS,
                payload: beers
            })
        }
           
        );
};

export const deleteBeer = (id) => {
    return {
        type: DELETE_BEER,
        id
    }
}