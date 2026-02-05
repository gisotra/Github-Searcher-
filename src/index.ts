import  { SearchService } from "./services/SearchService"

let nome_usuario1 = "gisotra"
let nome_usuario2 = "jonasalameda"
const ss = new SearchService()

async function process(){
    // preciso criar uma função auxiliar, já que a operação de extração não é imediata
    console.log("Buscando o usuário ", nome_usuario2)

    const result = await ss.getUser(nome_usuario2)
    
    console.log(result)
} 

process()
