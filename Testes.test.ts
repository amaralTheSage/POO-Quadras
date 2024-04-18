import { Quadra, Reserva } from "./quadra";

const pelotas = {
    nome: "Pelotas",
   tipo: "Futbol"
}


describe('registro de quadra', () => {
   it ('Criase uma quadra com o nome Pelotas, de futbol', () => {
       const coisa: Quadra =  Quadra.novaQuadra(pelotas.nome, pelotas.tipo)
       expect(coisa.nome).toBe("Pelotas");
       expect(coisa.tipo).toBe("Futbol");
    })
})