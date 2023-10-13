import {total,btn, qtd, select} from './Nomesprod';
const eqp=document.querySelector("#eqp");
const sup=document.querySelector("#sup");
const acess=document.querySelector("#acess");
const guardEquips=eqp.innerHTML;
const guardSuplementos=sup.innerHTML;
const guardAcessorios=acess.innerHTML;
const minSuple=2000;
const minAcess=750;
const minEquips=1000;
let estoqueSuple=1500;
let estoqueAcess=300;
let estoqueEquips=700;
let totalpass=2500;
total.innerHTML=totalpass;
function porcentagem(x,y){
     let result=(x/y)*100; 
     return `${result.toFixed(2)}%`;
}

  



export default btn.addEventListener('click',()=>{
 
     if(select.value=='My value equips'){
       estoqueEquips= estoqueAtualizado(minEquips,`O estoque mínimo de acessórios e equipamentos esportivos é 1000, estoque atual:${estoqueEquips}`, estoqueEquips);
    }if(select.value=='My value suplementos'){
       estoqueSuple= estoqueAtualizado(minSuple,`O estoque mínimo de suplementos é 2000, estoque atual:${estoqueSuple}`, estoqueSuple);
     }if(select.value=='My value protect'){
        estoqueAcess=estoqueAtualizado(minAcess,`O estoque mínimo de acessórios de proteção é 750, estoque atual:${estoqueAcess}`, estoqueAcess);
    }
    AjustPorcentagem();
})
function estoqueAtualizado(x,y,z){
    if(qtd.value>1){
    if(z+Number(qtd.value)>x){
        alert("estoque acima do mínimo, não há necessidade de realizar novo pedido");
        return z;
    }     
    }

z+=Number(qtd.value);
totalpass+=Number(qtd.value);
total.innerHTML=totalpass;
qtd.value>1 ? alert(`${y}+${qtd.value}`): alert(`${y}${qtd.value}`);
return z;
}
export function AjustPorcentagem(){
eqp.innerHTML=`${guardEquips} ${porcentagem(estoqueEquips,totalpass)}`;
sup.innerHTML=`${guardSuplementos} ${porcentagem(estoqueSuple,totalpass)}`;
acess.innerHTML=`${guardAcessorios} ${porcentagem(estoqueAcess,totalpass)}`;
}

    
    
    