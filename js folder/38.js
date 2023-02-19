let cpuI =Math.floor(Math.random()*3);
let cpu =[s,g,p][cpuI]

const match =(cpu,player)=>{
if (cpu===player){
    return 'nobody.Match is tie'

}

else if (cpu===s && player===p){
    return"cpu wins"
}


else if (cpu===s && player===g){
return "player wins"
}

else if (cpu===g && player===p){
return"player wins"

}

else if (cpu===g && player===s){
return"cpu wins"

}


else if (cpu===p && player===s){
return"player wins"

}


else if (cpu===p && player===g){

return"cpu wins"

}


 let result= match(cpu,player)
document.write(`cpu:${result} player:${result} result:${result}`)


}













