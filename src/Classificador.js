let nomeDoHeroi="Murilo"
let xpDoHeroi=0;

while(xpDoHeroi<=11000){

    if(xpDoHeroi<=1000){
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Ferro");
    } else if(xpDoHeroi<=2000) {
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Bronze");
    } else if(xpDoHeroi<=5000) {
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Prata");
    } else if(xpDoHeroi<=7000) {
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Ouro");
    } else if(xpDoHeroi<=8000) {
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Platina");
    } else if(xpDoHeroi<=9000) {
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Ascendente");
    } else if(xpDoHeroi<=10000) {
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Imortal");
    } else {
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Radiante");
    
}

//Aumento de xp do Herói em 1000 a cada interação
xpDoHeroi +=1000;
}