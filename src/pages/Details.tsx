import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Link, useParams} from 'react-router-dom';
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
				.catch(error => console.log(error));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [movieId]);
	return (
		<div className="container">
			{obj && obj.title}
		</div>
	)
}
export default Details;
