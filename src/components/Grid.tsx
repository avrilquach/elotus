import { LazyLoadImage } from "react-lazy-load-image-component"
export type Props = {
	id?:number,
	title?:string,
	poster_path?: string,
	release_date?: string,
	original_language?:string,
}
export type GridProps = {
	movieList ?: Props[],
}
function Grid (GridProps:any){
  const movieList = GridProps.movieList;
	return (
			<div className="movie grid">
				{
					movieList.map((movie:any) => (
						<div className="item" key={movie.id}>
							<div className="fade-in-image">
								<LazyLoadImage
									src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
								/>
							</div>
							<h4 className="title">{movie.title}</h4>
							<div className="caption open-left">
								<div className="inner">
									<h4>{movie.title}</h4>
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
						</div>
					))
				}
		  </div>
	)
}
export default Grid;
