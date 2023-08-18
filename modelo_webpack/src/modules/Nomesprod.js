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
console.log(objDaloja[0][1]);

export default categorys.addEventListener('click',()=>{
    let valueCategorys=categorys.value;
    if(valueCategorys=='equips'){
        limpaSelect();
     
        for(let i=0;i<4;i++){
        select.options[select.options.length] = new Option(objDaloja[0][i], 'My value equips');}
}
    if(valueCategorys=='suplementos'){
        limpaSelect();
        for(let i=0;i<4;i++){
        select.options[select.options.length] = new Option(objDaloja[1][i], 'My value suplementos');}

    }
    if(valueCategorys=='protect'){
        limpaSelect();
        for(let i=0;i<4;i++){
        select.options[select.options.length] = new Option(objDaloja[2][i], 'My value protect');}

    }


})

function limpaSelect(){
    for(let i=0;i<4;i++){
    select.remove(document.querySelector('.names').value='My value');
    }
    
}
