import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard'
import { addMovies } from '../actions';


class App extends React.Component {
  componentDidMount(){
    // Array destructuring = this.props.store.dispatch({}) to store.dispatch({})
    const { store } = this.props;

    // subscribe() function of store takes function as an argumant.
    store.subscribe(()=>{
      console.log('UPDATED');
      this.forceUpdate();
    }); 

    store.dispatch(addMovies(data));
    console.log("STATE", this.props.store.getState());
  }
  render(){const {list} = this.props.store.getState() // {list: [], favourites: []}
    console.log('RENDER', this.props.store.getState());
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>
        <div className="list">
          {/* index will give the index of that particular movie in my data array */}
         {list.map((movie, index) => (
          <MovieCard movie={movie} key={`movies = ${index}`}/>
         ))}
        </div>
      </div>
    </div>
  );}
}

export default App;
