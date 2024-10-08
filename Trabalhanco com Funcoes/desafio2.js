let totalWin = 85;
let totalLose = 35;

let balance = total(totalWin, totalLose);
let rank = ranking(balance);

console.log(`O Herói tem de saldo de ${balance} vitórias e está no nível ${rank}`);


function total(totalWin, totalLose){    
    return (totalWin - totalLose);
}

function ranking(balance){
    
    let calculatingRank;
    
    if(balance <= 10){
        calculatingRank =  "Ferro";
    }else if(balance <=20){
        calculatingRank =  "Bronze";
    }else if(balance <= 50){
        calculatingRank =  "Prata";
    }else if(balance <= 80){
        calculatingRank = "Ouro";
    }else if(balance <= 90){
        calculatingRank = "Diamante";
    }else if(balance <= 100){
        calculatingRank = "Lendário";
    }else {
        calculatingRank = "Imortal";
    }
    return calculatingRank;

}
