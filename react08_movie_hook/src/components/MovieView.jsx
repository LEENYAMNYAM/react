import './MovieView.css'
import {useLocation} from "react-router-dom";

function MovieView(){
    const location = useLocation();
    const {year, title, summary, poster, genres} = location.state || {};
    return(
        <div className='movie__container'>
            <img src={poster} alt={title} title={title}></img>
            <div>
                <h3 className='movie__title'>{title}</h3>
                <h5 className='movie__year'>{year}</h5>
                <ul className='movie__genres'>
                    {
                        genres.map((genre, index) => (
                            <li className='' key={index}>{genre}</li>
                        ))
                    }
                </ul>
                <p> {summary}</p>
            </div>
        </div>
    )
}
export default MovieView