function List (){
	return (
			<div className="movie grid">
			  {
			    movieList.map((movie,index) => (
			      <div className="item" key={index}>
			        <div className="fade-in-image">
                 <LazyLoadImage
                   src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                   />
              </div>
              <h4 className="title">{movie.title}</h4>
              <div className="date">{movie.release_date}</div>
			      </div>
			    ))
			  }
		  </div>
	)
}
export default List;
