import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {LazyLoadImage} from "react-lazy-load-image-component";
import { Link,useParams} from 'react-router-dom';
function Details (){
	const {movieId} = useParams();
	const [obj, setObj] = useState<any>()
	useEffect(() => {
		if(movieId){
			axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9bba8721be6b18fe7bac77d2a21da992`)
				.then(res => {
					if(res.data){
						setObj(res.data);
					}
				})
				.catch(error => alert(error));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [movieId]);
	return (
		<div className="container">
			<div className="back-icon">
				<Link to={`/`}>
					Back
				</Link>
			</div>
			{obj && <div className="detail">
				<div className="thumb">
					<div className="fade-in-image">
						{obj.poster_path === null ? <LazyLoadImage
							src={`https://picsum.photos/seed/picsum/200/300`}
						/>: <LazyLoadImage
							src={`https://image.tmdb.org/t/p/w400${obj.poster_path}`}
						/>}
					</div>
				</div>
				<div className="content">
					<h1>
						{obj.title}
					</h1>
					<div className="desc">
						<p>
							<span>Release:</span>
							{obj.release_date}
						</p>
						<p>
							<span>Language:</span>
							{obj.original_language}
						</p>
					</div>
					<h3>Overview</h3>
					<p className="overview">{obj.overview}</p>
				</div>
			</div>}
		</div>
	)
}
export default Details;
