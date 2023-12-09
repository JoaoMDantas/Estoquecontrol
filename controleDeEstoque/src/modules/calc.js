/*PBL1
 Registrar  entradas de produto (nome, categoria e
quantidade);
• Declarar o valor mínimo permitido em estoque por categoria em
constantes;
• Calcular o quantitativo total de produtos em estoque em uma
variável;
• Apresentar a porcentagem de estoque no prompt de comando por
categoria.*/

import {total,btn, qtd, select,objDaloja} from './Nomesprod';
const eqp=document.querySelector("#eqp");
const sup=document.querySelector("#sup");
const acess=document.querySelector("#acess");
const guardEquips=eqp.innerHTML;
const guardSuplementos=sup.innerHTML;
const guardAcessorios=acess.innerHTML;
const minSuple=2000;
const minAcess=750;
const minEquips=1000;
const btnlist=document.querySelector('#listarbtn');
let estoqueSuple=1500;
let estoqueAcess=300;
let estoqueEquips=700;
let totalpass=2500;
total.innerHTML=totalpass;
function porcentagem(x,y){
     let result=(x/y)*100; 
     return `${result.toFixed(2)}%`;
}
const categories = [
    {
        value: "equips",
        label: "Acessórios e Equipamentos Esportivos",
        Number:0,
        estoque:700,
        estoqueMin:1000
    },
    {
        value: "suplementos",
        label: "Suplementos e Nutrição",
        Number:1,
        estoque:1500,
        estoqueMin:2000
    },
    {
        value: "protect",
        label: "Acessórios de Proteção",
        Number:2,
        estoque:300,
        estoqueMin:700
    }
];

  



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
btnlist.addEventListener('click',listarProdutos);
export function listarProdutos() {
   let report = 'Relatório de Estoque:\n\n';
   categories.forEach(category => {
       report += `Categoria: ${category.label} `;
       report+=`estoque Atual:${category.estoque}, estoque Máximo:${category.estoqueMin}, ${porcentagem(category.estoque,totalpass)}\n`;
       objDaloja[category.Number].forEach(product => {
           report += `- ${product}\n`;
       });

       report += '\n';
   });

   const blob = new Blob([report], { type: 'text/plain' });
   const url = URL.createObjectURL(blob);
   const a = document.createElement('a');
   a.href = url;
   a.download = 'relatorio_estoque.txt';
   a.click();    
   }

    
    
    