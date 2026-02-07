import  { SearchService } from "./services/SearchService"

let nome_usuario:string = "gisotra";
const ss = new SearchService()

async function process(){
    // preciso criar uma função auxiliar, já que a operação de extração não é imediata
    console.log("Buscando o usuário ", nome_usuario)

    const result = await ss.getUser(nome_usuario)
    
    console.log(result)
} 

process()
