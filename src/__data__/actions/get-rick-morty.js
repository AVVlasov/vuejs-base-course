import axios from 'axios'

export default async (search) => {
 const result = await axios('https://rickandmortyapi.com/api/character/', {
        method: 'GET',
        params: {
          name: search
        }
    })

    return result.data.results
}