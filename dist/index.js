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
const SearchService_1 = require("./services/SearchService");
let nome_usuario1 = "gisotra";
let nome_usuario2 = "jonasalameda";
const ss = new SearchService_1.SearchService();
function process() {
    return __awaiter(this, void 0, void 0, function* () {
        // preciso criar uma função auxiliar, já que a operação de extração não é imediata
        console.log("Buscando o usuário ", nome_usuario2);
        const result = yield ss.getUser(nome_usuario2);
        console.log(result);
    });
}
process();
//# sourceMappingURL=index.js.map