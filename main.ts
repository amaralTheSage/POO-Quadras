import  { Quadra, Reserva }  from "./quadra";
import  Prompt  from "prompt-sync";
// Yago, Gabriel, Nathan, Natan, Daniel, Josue

const key = Prompt();


let quadras: Quadra[] = []

let reservas: Reserva[] = []



while(true) {

    console.log("+--------------------------------+");
    console.log("| 1. Registar Quadra             |");
    console.log("| 2. Reservar Quadra             |");
    console.log("| 3. Listar Quadras Disponíveis  |");
    console.log("| 4. Listrar Quadras Reservadas  |");
    console.log("| 0. Sair                        |");
    console.log("+--------------------------------+");

    let opcao: number = +key('Digite uma opção:');

    if(opcao ==  0){
        break;
    } 

    switch(opcao){
        case 1:
            const newQuadra = key("| Nome da Quadra:  ");
            const newQuadraType = key("| Tipo da Quadra:  ");
    
            const quadra:Quadra = Quadra.novaQuadra(newQuadra, newQuadraType)
            quadras.push(quadra)

        break;
     
        case 2:
            const nomeCliente = key("| Nome do Cliente:  ");

            for(let c = 0; c < quadras.length; c++ ){
                console.table(`${c + 1}. ${quadras[c].nome}`)
            }
            const numQuadra = +key("| Quadra a reservar:  ");
            
            const quadraSelecionada = quadras[numQuadra - 1].nome
            const reserva: Reserva  = Reserva.novaReserva(nomeCliente, quadraSelecionada)

            reservas.push(reserva)
            
            quadras.splice(+quadraSelecionada - 1, 1)
            console.table(reservas)

        break;


        case 3: 
        for(let c = 0; c < quadras.length; c++ ){
            console.table(`${c + 1}. ${quadras[c].nome}`)
        }

        break;

        case 4: 

        for(let c = 0; c < reservas.length; c++ ){
         console.log(`${c + 1}. Quadra ${reservas[c].quadra} reservada em ${reservas[c].data} por ${reservas[c].nomeCliente}`)
        }
        

      
    }


 

}


