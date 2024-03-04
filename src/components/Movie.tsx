import { useEffect,useState } from 'react'
import axios from 'axios'
import Grid from '.Grid.js'
function Movie (){
  const [movieList, setMovieList] = useState([])
  const getNowPlaying  = () =>{
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=9bba8721be6b18fe7bac77d2a21da992`)
        .then(res => {
          console.log("aaa",res);
          if(res.data){
            setMovieList(res.data.results);
          }
        })
        .catch(error => console.log(error));
  }
  const getTopRated  = () =>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9bba8721be6b18fe7bac77d2a21da992`)
        .then(res => {
          console.log(res);
        })
        .catch(error => console.log(error));
  }
  useEffect(() => {
		getNowPlaying()
  }, []);
	return (
		<div className="container">
			<h2 className="title-heading">
				<span className="title active">Now Playing </span>/
				<span className="title"> Top Rated</span>
			</h2>
			<div className="main">
				<Grid movieList={movieList}/>
			</div>
		</div>
	)
}
export default Movie;
