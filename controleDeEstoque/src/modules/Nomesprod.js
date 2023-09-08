export const categorys=document.querySelector('.category');
export const select=document.querySelector('.names');
export let qtd=document.querySelector('.qtd');
export let btn=document.querySelector('.btn');
export let total=document.querySelector('.total-estoque');

export const objDaloja=[
 [
'Raquetes',
'Pranchas de surfe',
'Bastões de beisebol e tacos de golfe',
'Luvas de boxe e equipamentos de luta'    
],
[
'Proteínas em pó',
'Barras energéticas',
'Vitaminas e suplementos esportivos',
'Shakes pós-treino'    
],
[
'Capacetes',
'Cotoveleiras, joelheiras e munhequeiras',
'Óculos de proteção',
'Protetores bucais'
]
]
export default categorys.addEventListener('click',()=>{

    let valueCategorys=categorys.value;
    if(valueCategorys=='equips'){
        select.disabled=false;
        criaValues(0,'My value equips');
}
    if(valueCategorys=='suplementos'){
        criaValues(1,'My value suplementos');
    }
    if(valueCategorys=='protect'){
        criaValues(2,'My value protect');
    }
})
select.addEventListener('click',()=>{
//para fazer a terceira entrega tive que realizar outro evento de click, dessa vez no select.

    
        let valueSelect= select.value;
        if(valueSelect=='new obj'){
            let newObj=prompt("digite o nome do produto:");
            if(categorys.value=='equips'){
            unshiftNewObj(0,newObj);
            criaValues(0,'My value equips');

        }
        if(categorys.value=='suplementos'){
            unshiftNewObj(1,newObj);
            criaValues(1,'My value suplementos');

        }
        if(categorys.value=='protect'){
            unshiftNewObj(2,newObj);
            criaValues(2,'My value protect');

        }
    
        
    
}})
function unshiftNewObj(x,y){
    objDaloja[x].unshift(y);    
}
//x é usado para identificar o array, e y é quem vai ser puxado

function criaValues(x,y){
    limpaSelect();
    let tamanho=objDaloja[x].length;
    for(let i=0;i<tamanho;i++){
        select.options[i] = new Option(objDaloja[x][i], y);
    }
    select.options[tamanho]= new Option('Adicione um novo item', 'new obj');
//adicionei essa option a ser criada, se clicada abre o prompt para adicionar um novo item
}
function limpaSelect(){
    select.remove(select);
}//refatorei essa função
