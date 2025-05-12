import {Component} from "react";

class Home extends Component{
    state ={
        isLoding : true,
        movies: []
    }

    getMovies = () => {
        // 비동기 함수 fetch
        fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
            .then((res) => res.json())
            .catch(err => console.log(err))
            .then((res)=>{
                console.log(res.data.movies)
                console.log("movie_count : ", res.data.movie_count)
                this.setState({
                    isLoding: false,
                    movies: res.data.movies
                })
            })
    }

    /* 가장 먼저 실행 됨. */
    componentDidMount(){
        console.log("componentDidMount")
        this.getMovies()
    }

    render(){
        const {isLoding, movies} = this.state;
        return(
            <div>
                <h1>Home</h1>
                {
                    isLoding ? <div>
                                    <span>Loading...</span>
                               </div> :
                    movies.map((movie) => {
                    return(
                        <a href={movie.url}>
                            <h3>{movie.title}</h3>
                        </a>
                    )
                })}
            </div>
        )
    }
}
export default Home;