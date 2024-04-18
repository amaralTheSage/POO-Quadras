import { create } from "ts-node";
import  Prompt  from "prompt-sync";

export class Quadra {
    nome: string = "";
    tipo : string = "";
    static novaQuadra(nome: string, tipo: string): Quadra {
        const createdQuadra: Quadra = new Quadra()
        createdQuadra.nome = nome;
        createdQuadra.tipo = tipo;
        return createdQuadra;
    }
}

export class Reserva {
    nomeCliente: string = ''
   quadra: string = ""
    data: string = ''
        static novaReserva(nome: string, quadra: string): Reserva{
        const createdReserva: Reserva = new Reserva()        
        createdReserva.nomeCliente = nome;
        createdReserva.quadra = quadra;
        createdReserva.data =  new Date().toLocaleString();

        return createdReserva;
    }
}
