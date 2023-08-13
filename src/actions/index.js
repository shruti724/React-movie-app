// Actions are just a javascript object.
// through which we express an intent to modify the state.

// Actions act as a breadcrupms for the user-actions.

// ACTIONS

// {
//     type: 'ADD_MOVIES',
//     movies: [m1, m2, m3]
// }

// {
//     type: 'DELETE_MOVIES'
// }


// these veriables are called action types.
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURIE = "ADD_FAVOURIE";


// These functions are called action creator.
export function addMovies(movies){
    return {
      type: "ADD_MOVIES",
      movies: movies,
    };
}
export function addFavourtie(movie){
    return {
      type: "ADD_FAVOURIE",
      movie,
    };
}

// Generally in React community we follow this pattern, we use action creator for returning actions and action types as variable.

