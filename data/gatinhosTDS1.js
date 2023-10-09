//API https://api.thecatapi.com/v1/images/search?limit=10

import axios from "axios";
const limite = 10;
const URL = 'https://api.thecatapi.com/v1/images/search?limit=' + limite + '&page=10&order=Desc';

const gatinhos = async () => {
    try {
        const resposta = await axios.get(URL);
        return resposta.data
    } catch (error) {
        throw error;
    }

}

export default gatinhos;
