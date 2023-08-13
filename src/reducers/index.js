import { ADD_MOVIES, ADD_FAVOURIE } from "../actions";

// Changing state from a list to an object.
const initialMoviesState = {
    list: [],
    favourites: []
}

// Here state is the default state of the store.
export default function movies (state = initialMoviesState, action) {
    // In react community we avoid if else instead we use switch case.

    // if (action.type === ADD_MOVIES){
    //     return {
    //       ...state,
    //       list: action.movies,
    //     };
    // }
    // return state;

    switch (action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies,
        }
        case ADD_FAVOURIE:
            return{
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        default:
            return state; 
    }
}

// internally movies reducer is called like this:

// movies(undefined, {})
// o/p: STATE: []

// Redux is calling out movies reducers like this and if it is undefine, our state will take the initial emty array getValue.