"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchService = void 0;
class SearchService {
    constructor() {
        this.apiURL = "https://api.github.com/users";
    }
    getUser(username) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //fazer a leitura dos dados da API do github com base no nome
                const placeholderURL = `${this.apiURL}/${username}`;
                // abrigo o resultado da busca na api com url personalizada, ela vai me retornar todas as colunas correspontes aquele meu usuario
                const response = yield fetch(placeholderURL);
                if (!response.ok) {
                    console.log("Erro: O usuário não foi encontrado (404)");
                    return null;
                }
                // eu "filtro" as informações que eu quero do json obtido a partir da minha interface GithubUser
                const data = yield response.json();
                return data;
                //caso encontre algo condizente com o nome de usuário digitado, retorno os valores
                // passo esses valores pra uma variavel local do tipo GithubUser
                // retorno
            }
            catch (error) {
                console.error("Erro na extração de dados do usuário na API: ", error);
                return null;
            }
        });
    }
}
exports.SearchService = SearchService;
//# sourceMappingURL=SearchService.js.map