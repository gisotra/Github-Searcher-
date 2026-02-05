import { GithubUser } from "../models/User";

export class SearchService {
    private apiURL: string = "https://api.github.com/users";

    async getUser(username: string): Promise<GithubUser | null> {
        try {
            //fazer a leitura dos dados da API do github com base no nome
            const placeholderURL = `${this.apiURL}/${username}`;

            // abrigo o resultado da busca na api com url personalizada, ela vai me retornar todas as colunas correspontes aquele meu usuario
            const response = await fetch(placeholderURL);

            if (!response.ok) {
                console.log("Erro: O usuário não foi encontrado (404)")
                return null
            }
            
            // eu "filtro" as informações que eu quero do json obtido a partir da minha interface GithubUser
            const data = await response.json() as GithubUser

            return data
            //caso encontre algo condizente com o nome de usuário digitado, retorno os valores

            // passo esses valores pra uma variavel local do tipo GithubUser

            // retorno


        } catch (error) {
            console.error("Erro na extração de dados do usuário na API: ", error)
            return null;
        }
    }
}