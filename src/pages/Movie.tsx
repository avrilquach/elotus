import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Grid from '../components/Grid';
import List from '../components/List';
import Banner from '../components/Banner';
import Loading from '../components/Loading';
import {ReactComponent as GirdSvg} from "./../grid.svg";
import {ReactComponent as ListSvg} from "./../list.svg";
const api_key = "9bba8721be6b18fe7bac77d2a21da992"
function Movie (){
  const [movieList, setMovieList] = useState([]);
  const [banner, setBanner] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeId, setActiveId] = useState<number>();
  const [layoutView,setLayoutView] = useState<string>('grid');
  const timeOut = () =>{
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }
  const getNowPlaying  = () =>{
    setIsLoading(true);
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`)
        .then(res => {
          if(res.data){
            timeOut();
            setMovieList(res.data.results);
            setBanner(res.data.results[0]);
            setActiveId(1);
          }
        })
        .catch(error => alert(error));
  }
  const getTopRated  = () =>{
    setIsLoading(true);
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`)
      .then(res => {
        if(res.data){
          timeOut();
          setMovieList(res.data.results);
          setActiveId(2);
        }
      })
      .catch(error => alert(error));
  }
  useEffect(() => {
		getNowPlaying();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSearch = (data:string) =>{
    if(data){
      setIsLoading(true);
      axios.get(`https://api.themoviedb.org/3/search/movie?query=${data}&api_key=${api_key}`)
        .then(res => {
          if(res.data){
            timeOut();
            setMovieList(res.data.results);
            setActiveId(3);
          }
        })
        .catch(error => alert(error));
    }else{
      getNowPlaying();
    }
  }
  const handleLayout = (layout:string) => {
    setIsLoading(true);
    timeOut();
    setLayoutView(layout);
  }
	return (
		<div className="container">
      {movieList && <Banner onSubmit={handleSearch} banner={banner}/>}
			<h2 className={`title-heading ${activeId === 3 && "hidden"}`}>
				<span className={activeId === 1 ? 'title active': "title"} onClick={()=>getNowPlaying()}>Now Playing </span>/
				<span className={activeId === 2 ? 'title active': "title"} onClick={()=>getTopRated()}> Top Rated</span>
			</h2>
			<div className="main">
        <div className="grid-list-tool">
          <div className={layoutView === "grid" ? 'icon-grid active': "icon-grid"} onClick={()=>handleLayout("grid")}>
            <GirdSvg />
          </div>
          <div className={layoutView === "list" ? 'icon-list active': "icon-list"} onClick={()=>handleLayout("list")}>
            <ListSvg />
          </div>
        </div>
        {movieList && layoutView === "grid" ? <Grid movieList={movieList}/> : <List movieList={movieList}/>}
			</div>
      {isLoading && <Loading/>}
		</div>
	)
}
export default Movie;
