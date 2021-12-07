let idade =18;
if (idade>18){
    console.log("Cadastro não permitido para menores de 18 anos")
} else {
    console.log("Idade ideal !!Prosseguir com o cadastro.")
}
let evento ="data";
let dataAtual ="hoje";
if (evento>=dataAtual){
    console.log("Este evento já aconteceu!! Selecione outra data valida.")
} else {
    console.log("Data valida prosseguir.")
}
let listasDeParticipantes=["maria","jose","pedro"];
if(listasDeParticipantes.length >100){
    console.log("Numero de participantes excedeu o limite.")
    if (listasDeParticipantes.length==0) {
        console.log("Numero de participantes não pode esta vazio.")
    } 
}else{
    console.log("Cadastro realizado com sucesso!!")
}