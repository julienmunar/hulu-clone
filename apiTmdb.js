export const API_KEY="fc4fa6cacb400514e088889a9dccc068"



export default {
    
    fetchTrending:{
        title:'Trending',
        url:`/trending/all/day?api_key=${API_KEY}`
    },
    fetchTopRated:{
        title:'Top Rated',
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    },
    fetchAction:{
        title:'Action',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchDocumentary:{
        title:'Documentary',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=99`
    },
    fetchComedy:{
        title:'Comedy',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchTvAdventure:{
        title:'Adventure',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=12`
    },
    fetchHorror:{
        title:'Horror',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomance:{
        title:'Romance',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMystery:{
        title:'Mystery',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFi:{
        title:'Sci-Fi',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    fetchWestern:{
        title:'Western',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchTvMovie:{
        title:'TV Movie',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10770`
    },
    fetchTvThriller:{
        title:'Thriller',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=53`
    },
}





// {"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}