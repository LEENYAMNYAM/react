import './Movie.css'
import {Link} from "react-router-dom";

function Movie({year, title, summary, medium_cover_image, genres}){
    console.log("Movie : ", year, title, summary, medium_cover_image, genres)
    const poster = medium_cover_image;
    return(
        <div className='movie'>
            <img src={poster} alt={title} title={title}/>
            <div>
                <h3 className='movie__title'>{title}</h3>
                <h5 className={'movie__year'}>{year}</h5>
                <ul className='movie__genres'>
                    {
                        genres.map((genre, index) => (
                            <li key={index}>{genre}</li>
                        ))
                    }
                </ul>
            </div>
            <p> {summary.slice(0,100)}...</p>
            <Link to='./movieView'
                state={{
                    year,
                    title,
                    summary,
                    poster,
                    genres
                }}>Detail</Link>
        </div>
    )
}
export default Movie