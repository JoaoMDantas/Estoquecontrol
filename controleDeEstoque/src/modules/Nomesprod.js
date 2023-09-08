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
        criaValues(0,'My value equips');
}
    if(valueCategorys=='suplementos'){
        criaValues(1,'My value suplementos');
    }
    if(valueCategorys=='protect'){
        criaValues(2,'My value protect');
    }
})
function criaValues(x,y){
    limpaSelect();
    for(let i=0;i<4;i++){
        select.options[select.options.length] = new Option(objDaloja[x][i], y);
    }

}
function limpaSelect(){
    for(let i=0;i<4;i++){
    select.remove(document.querySelector('.names').value='My value');
    }  
}
