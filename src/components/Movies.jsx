/* eslint-disable react/prop-types */

const ListOfMovies = ({movies}) => {
  return (
     <ul className="movies">
            {
              movies.map(movie => (
                <li className="movie" key={movie.id}>
                   <h3>{movie.title}</h3> 
                   <p>{movie.year}</p>
                   <img src={movie.image} alt="" />
                </li>
              )) 
            }
          </ul>
  )
}

const NoMoviesResults = () => {
  return (
    <p>No se encontraron películas para esta búsqueda</p>   
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0  
  return (    
   hasMovies 
    ? <ListOfMovies movies={movies} />
    : <NoMoviesResults />  
  )   
}

