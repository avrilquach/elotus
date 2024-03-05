import { LazyLoadImage } from "react-lazy-load-image-component";
import {Link} from 'react-router-dom';
export type Props = {
	id?:number,
	title?:string,
	poster_path?: string,
	release_date?: string,
	original_language?:string,
	vote_average?:number,
	overview?:string,
}
export type ListProps = {
	movieList ?: Props[],
}
function List (ListProps:any){
	const movieList = ListProps.movieList;
	return (
		<div className="movie list">
			{
				movieList.map((movie:any) => (
					<Link to={`/details/${movie.id}`} key={movie.id}>
						<div className="item" >
							<div className="fade-in-image">
								{movie.poster_path === null ? <LazyLoadImage
									src={`https://picsum.photos/seed/picsum/200/300`}
								/>: <LazyLoadImage
									src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
								/>}
							</div>
							<div className="vote">{movie.vote_average.toFixed(1)}</div>
							<div className="content">
								<h4>
									{movie.title}
								</h4>
								<p className="overview">{movie.overview}</p>
								<div className="desc">
									<p>
										<span>Release:</span>
										{movie.release_date}
									</p>
									<p>
										<span>Language:</span>
										{movie.original_language}
									</p>
								</div>
							</div>
						</div>
					</Link>

				))
			}
		</div>
	)
}
export default List;
