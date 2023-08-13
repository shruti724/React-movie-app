import {ADD_MOVIES} from '../actions';

// Changing state from a list to an object.
const initialMoviesState = {
    list: [],
    favourites: []
}

// Here state is the default state of the store.
export default function movies (state = initialMoviesState, action) {
    if (action.type === ADD_MOVIES){
        return {
          ...state,
          list: action.movies,
        };
    }
    return state;
}

// internally movies reducer is called like this:

// movies(undefined, {})
// o/p: STATE: []

// Redux is calling out movies reducers like this and if it is undefine, our state will take the initial emty array getValue.