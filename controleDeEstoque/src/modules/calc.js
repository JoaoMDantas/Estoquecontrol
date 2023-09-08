import {total,btn, qtd, select} from './Nomesprod';
const eqp=document.querySelector("#eqp");
const sup=document.querySelector("#sup");
const acess=document.querySelector("#acess");
const guardEquips=eqp.innerHTML;
const guardSuplementos=sup.innerHTML;
const guardAcessorios=acess.innerHTML;
const minSuple=35;
const minAcess=35;
const minEquips=35;
let estoqueSuple=50;
let estoqueAcess=50;
let estoqueEquips=50;
let totalpass=150;
total.innerHTML=totalpass;
function porcentagem(x,y){
     let result=(x/y)*100; 
     return `${result.toFixed(2)}%`;
}
export default btn.addEventListener('click',()=>{
     if(select.value=='My value equips'){
       estoqueEquips= estoqueAtualizado(minEquips,`O estoque mínimo de acessórios e equipamentos esportivos é 35, estoque atual:${estoqueEquips}`, estoqueEquips);
    }if(select.value=='My value suplementos'){
       estoqueSuple= estoqueAtualizado(minSuple,`O estoque mínimo de suplementos é 35, estoque atual:${estoqueSuple}`, estoqueSuple);
     }if(select.value=='My value protect'){
        estoqueAcess=estoqueAtualizado(minAcess,`O estoque mínimo de acessórios de proteção, estoque atual:${estoqueAcess}`, estoqueAcess);
    }
    AjustPorcentagem();
})
function estoqueAtualizado(x,y,z){
    if(estoqueEquips+Number(qtd.value)<x){
        alert(y);
        return;
    }     
z+=Number(qtd.value);
console.log(z);
totalpass+=Number(qtd.value);
total.innerHTML=totalpass;
return z;
}
export function AjustPorcentagem(){
eqp.innerHTML=`${guardEquips} ${porcentagem(estoqueEquips,totalpass)}`;
sup.innerHTML=`${guardSuplementos} ${porcentagem(estoqueSuple,totalpass)}`;
acess.innerHTML=`${guardAcessorios} ${porcentagem(estoqueAcess,totalpass)}`;
}

    
    
    