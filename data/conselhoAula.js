import axios from "axios";
//Vamos utilizar uma API de conselho.

// URL 	https://api.adviceslip.com/advice

const URL_API = 'https://api.adviceslip.com/advice';

const conselhos = async () => {
try {
    const resposta = await axios.get(URL_API);
    return resposta.data
    //Essa resposta vai ser um conselho e tbm um objeto/array
} catch (error) {
    throw error;
}

}

export default conselhos;