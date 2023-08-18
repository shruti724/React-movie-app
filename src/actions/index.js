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
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES"; 
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST"
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";


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

export function removeFromFavourites(movie){
    return {
      type: REMOVE_FROM_FAVOURITES,
      movie
    };
}

export function setShowFavourites(val){
    return {
      type: SET_SHOW_FAVOURITES,
      val,
    };
}

export function addMovieToList(movie){
  return{
    type: ADD_MOVIE_TO_LIST,
    movie
  }
}

// Basically action creator returns an objec but here it is returning a function.

// Here we want to tell the Redux that if you get an action than simply pass this action along to the reducer, if you get a functon just call this particular function with dispatch as an argumant. We can do it by using middleware.

// Middleware is called just after we dispatch the action and before it reaches to the reducers and that middleware name will be "Thunk"(Thunk is a special kind of function which is returned by a function).

export function handleMovieSearch(movie){
    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
    
    // Here this fuction is called Thunk.
    return function (dispatch){
      fetch(url)
        .then((response) => response.json())
        .then((movie) => {
          console.log("movie", movie);

          // dispatch an action
          dispatch(addMovieSearchResult(movie))

        });
    }

}

export function addMovieSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}


// Generally in React community we follow this pattern, we use action creator for returning actions and action types as variable.

