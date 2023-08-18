import x , {total,categorys,objDaloja,btn, qtd, select} from './Nomesprod';
const eqp=document.querySelector("#eqp");
const sup=document.querySelector("#sup");
const acess=document.querySelector("#acess");
const guard=eqp.innerHTML;
const guard2=sup.innerHTML;
const guard3=acess.innerHTML;


let suples=50;
let acessorios=50;
let equips=50;
let totalpass=150;
total.innerHTML=totalpass;
function porcentagem(x,y){
     let result=(x/y)*100; 
     return `${result.toFixed(2)}%`;
}

export default btn.addEventListener('click', test2);
function test2(){ 
     if(select.value=='My value equips'){
        if(equips+Number(qtd.value)<50){
            alert(`O estoque mínimo de acessórios e equipamentos esportivos é 50, estoque atual:${equips}`)
            return;
        }
        
    equips+=Number(qtd.value);
    totalpass+=Number(qtd.value);
    total.innerHTML=totalpass;
    init();
    }if(select.value=='My value suplementos'){
        if(suples+Number(qtd.value)<50){
            alert(`O estoque mínimo de suplementos é 50, estoque atual:${suples}`)
            return;
        }
        suples+=Number(qtd.value);
        totalpass+=Number(qtd.value);
        total.innerHTML=totalpass;
        init();
    }if(select.value=='My value protect'){
        if(acessorios+Number(qtd.value)<50){
            alert(`O estoque mínimo de acessórios de proteção é 50, estoque atual:${acessorios}`)
            return;
        }
            acessorios+=Number(qtd.value);
            totalpass+=Number(qtd.value);
            total.innerHTML=totalpass;
            init();
        
            }
    
  
}

export function init(){
eqp.innerHTML=`${guard} ${porcentagem(equips,totalpass)}`;
sup.innerHTML=`${guard2} ${porcentagem(suples,totalpass)}`;
acess.innerHTML=`${guard3} ${porcentagem(acessorios,totalpass)}`;

}

    
    
    