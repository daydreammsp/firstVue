import axios from 'axios'

const actions = {
    getPosterPath(){
        axios.get('http://localhost:5000/api/movies')
        .then(response => {
        let num = Math.floor(Math.random() * Math.floor(20))
    
        console.log(response.data.results[num].poster_path)
        this.state.posterPath = ' http://image.tmdb.org/t/p/w185/' + response.data.results[num].poster_path
        })
        .catch(e => {
        
        console.log(e)
        })
            }
}

export default actions