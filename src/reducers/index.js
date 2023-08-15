import { combineReducers } from "redux";
import { ADD_MOVIES, ADD_FAVOURIE, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES,
ADD_MOVIE_TO_LIST } from "../actions";

// Changing state from a list to an object.
const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
}

// Here state is the default state of the store.
export function movies (state = initialMoviesState, action) {
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
        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(
              (movie) => movie.Title !== action.movie.Title
            );
            return{
                ...state,
                favourites: filteredArray
            }   
        case SET_SHOW_FAVOURITES:{
            return {
                ...state,
                showFavourites: action.val
            }
        }
        default:
            return state; 
    }
}

// internally movies reducer is called like this:

// movies(undefined, {})
// o/p: STATE: []

// Redux is calling out movies reducers like this and if it is undefine, our state will take the initial emty array getValue.


const initialSearchState = {
    result: {}
}
export function search (state = initialSearchState, action){
    return state;
};

const initialRootState = {
    movies: initialMoviesState,
    search: initialSearchState
}

// For making our store more scalable.
// Also we don't need to create this method as his method is already created by Redux to use. Internally Redux is combining like this only.
 
// export default function rootReducer (state = initialRootState, action){
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }

// As combineReducers takes object as an argument. Here since the name is same we can use short hand insted of movies: movies, movies only. 
export default combineReducers({
    movies,
    search
});
