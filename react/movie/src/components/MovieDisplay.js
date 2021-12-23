const MovieDisplay = (props) => {

  console.log('tutu tara', props.movie);
    return (
      <>
        <h1>{props.movie.Title}</h1>
        <img src={props.movie.Poster} alt="" />
      </>
    )
    
  };
  
  
export default MovieDisplay;