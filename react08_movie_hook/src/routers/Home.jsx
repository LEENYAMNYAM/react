import './Home.css'
import axios from "axios";
import {useState, useEffect} from "react";
import Movie from "../components/Movie.jsx";


function Home(){
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies=()=>{
        axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
             .then((res) =>{
                 console.log("axios res : ", res.data)
                 console.log("res data movies : ", res.data.data.movies)
                 console.log("movie_count : ", res.data.data.movie_count)
                 setIsLoading(false)
                 setMovies(res.data.data.movies)

             })
    }

    // 여기서 useEffect는 시작할때도 실행되고 값이 변경될때마다 실행됨.
    // componentDidMount() : Home.jsx가 처음 실행될때 실행됨.  마지막에 빈배열[]을 추가하면 같은 역할을 함
    // componentDidUpdate() : Home.jsx가 update 될때 실행됨. 자동으로 변경될때마다 같은 역할을 해줌
    useEffect(() => {
        console.log("useEffect 실행");
        getMovies();
    }, []);

    return(
        <section className='container'>
            {
                isLoading ? (
                        <div className='loader'>
                            <span>isLoading</span>
                        </div>
                        )
                    : (
                        <div className='movies'>
                            {
                                movies.map((movie) => (
                                    <Movie key={movie.id}
                                           {...movie}/>
                                    ))
                            }
                        </div>
                    )
            }
            </section>
    )
}
export default Home;