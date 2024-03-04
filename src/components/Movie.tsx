import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Grid from './Grid'
import Banner from './Banner'
import Loading from './Loading'

function Movie (){
  const [movieList, setMovieList] = useState([])
  const [bannerList, setBannerList] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [activeId, setActiveId] = useState<number>();
  const timeOut = () =>{
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }
  const getNowPlaying  = () =>{
    setIsLoading(true);
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=9bba8721be6b18fe7bac77d2a21da992`)
        .then(res => {
          if(res.data){
            timeOut();
            setMovieList(res.data.results);
            setBannerList(res.data.results[0]);
            setActiveId(1);
          }
        })
        .catch(error => console.log(error));
  }
  const getTopRated  = () =>{
    setIsLoading(true);
    const sortData = movieList.sort((a:any, b:any) => (b.vote_average > a.vote_average) ? 1 : -1);
    timeOut();
    setMovieList(sortData);
    setActiveId(2);
  }
  useEffect(() => {
		getNowPlaying();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSearch = (data:string) =>{
    if(data){
      const searchData = movieList.filter((item:any) => item.title.toLowerCase().indexOf(data.toLowerCase()) !== -1);
      setMovieList(searchData);
    }else{
      getNowPlaying();
    }
  }
	return (
		<div className="container">
      {movieList && <Banner onSubmit={handleSearch} bannerList={bannerList}/>}
			<h2 className="title-heading">
				<span className={activeId === 1 ? 'title active': "title"} onClick={()=>getNowPlaying()}>Now Playing </span>/
				<span className={activeId === 2 ? 'title active': "title"} onClick={()=>getTopRated()}> Top Rated</span>
			</h2>
			<div className="main">
        {movieList && <Grid movieList={movieList}/>}
			</div>
      {isLoading && <Loading/>}
		</div>
	)
}
export default Movie;
