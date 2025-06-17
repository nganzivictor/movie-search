export default function Movie({movie}){
    return(

        <div className="movie">
            <h1>{movie.Title}</h1>
            <div className="movie-info">
                <img src={movie.Poster !== `N/A` ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
                <div className="movie-details">
                    <span>{movie.Year}</span>
                    <span>{movie.Type}</span>
                </div>
            </div>
        </div>
    )
}