let menu
do{
    menu = prompt("Digite uma opção: \n 1 - Classifcar Herói \n 2 - Sair")

switch(menu) {
    case "1":
        const nome = prompt("Digite o nome do herói: ")
        const quantXP = prompt("Digite a quantidade de XP: ")

        if(quantXP <= 1000){
            alert("O Herói de nome " + nome + " está no nível de Ferro")
        } else if(quantXP >= 1001 && quantXP <= 2000){
            alert("O Herói de nome " + nome + " está no nível de Bronze")
        } else if(quantXP >= 2001 && quantXP <= 5000){
            alert("O Herói de nome " + nome + " está no nível de Prata")
        } else if(quantXP >= 5001 && quantXP <= 7000){
            alert("O Herói de nome " + nome + " está no nível de Ouro")
        } else if(quantXP >= 7001 && quantXP <= 8000){
            alert("O Herói de nome " + nome + " está no nível de Platina")
        } else if(quantXP >= 8001 && quantXP <= 9000){
            alert("O Herói de nome " + nome + " está no nível de Ascendente")
        } else if(quantXP >= 9001 && quantXP <= 10000){
            alert("O Herói de nome " + nome + " está no nível de Imortal")
        } else if(quantXP >= 10001){
            alert("O Herói de nome " + nome + " está no nível de Radiano")
        }
        break
    case "2":
        break
    default:
        alert("Opção inválida! Por favor, escolha 1 ou 2.");    
}
}while(menu !== "2")

 
