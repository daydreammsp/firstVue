import axios from 'axios'

const actions = {
    getPosterPath(){
        axios.get('http://localhost:5000/api/movies')
        .then(response => {
        let num = Math.floor(Math.random() * Math.floor(20))
    
        //'http://image.tmdb.org/t/p/w185/'
        this.state.posterPath = response.data.results
        console.log(this.state.posterPath)    
    })
        .catch(e => {
        
        console.log(e)
        })
            }
}

export default actions