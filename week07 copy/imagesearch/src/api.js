import axios from 'axios'

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {Authorization: 'Client-ID wwIccxCtiE45iYTi3sMKXRZ4bfO13smMXrc1bkScGrI'}, 
        params: {query: term},
    })

    console.log(response)
    return response.data.results
}

export default searchImages