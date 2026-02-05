"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchService = void 0;
const User_1 = require("../models/User");
class SearchService {
    apiURL = "https://api.github.com/users";
    async getUser(username) {
        try {
            //fazer a leitura dos dados da API do github com base no nome
            const placeholderURL = `${this.apiURL}/${username}`;
            // abrigo o resultado da busca na api com url personalizada, ela vai me retornar todas as colunas correspontes aquele meu usuario
            const response = await fetch(placeholderURL);
            if (!response.ok) {
                console.log("Erro: O usuário não foi encontrado (404)");
                return null;
            }
            // eu "filtro" as informações que eu quero do json obtido a partir da minha interface GithubUser
            const data = await response.json();
            return data;
            //caso encontre algo condizente com o nome de usuário digitado, retorno os valores
            // passo esses valores pra uma variavel local do tipo GithubUser
            // retorno
        }
        catch (error) {
            console.error("Erro na extração de dados do usuário na API: ", error);
            return null;
        }
    }
}
exports.SearchService = SearchService;
//# sourceMappingURL=SearchService.js.map