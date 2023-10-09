import axios from 'axios';

const URL =  'https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR'

const valorant = async () => {

    try {
        const resposta = await axios.get(URL);
        return resposta.data;
    } catch (error) {
        throw (error);  
    }
}

export default valorant;