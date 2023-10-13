export const categorys=document.querySelector('.category');
export const select=document.querySelector('.names');
export let qtd=document.querySelector('.qtd');
export let btn=document.querySelector('.btn');
export let total=document.querySelector('.total-estoque');
const btnlist=document.querySelector('#listarbtn');
const btnRemove=document.querySelector('#removebtn');
const btnAdd=document.querySelector('#addbtn');

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
    btnAdd.disabled=false;

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
btnAdd.addEventListener('click',att);
function att(){
    //para fazer a terceira entrega tive que realizar outro evento de click, dessa vez no select.

    
        while(true){
            let newObj=prompt("digite o nome do produto:");
            if(newObj.toLowerCase()==='sair'|| newObj===''){
                break;
            }
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
    }
    
    
    
}


btnRemove.addEventListener('click',deletarProduto);

export function deletarProduto() {
   
        const nomeProduto = prompt("Digite o nome do produto a ser excluído:");
        let produtoEncontrado = false;
    
        for (const categoria of objDaloja) {
            const index = categoria.indexOf(nomeProduto);
            
            if (index !== -1) {
                categoria.splice(index, 1);
                alert("Produto excluído com sucesso.");
                produtoEncontrado = true;
                limpaSelect();
                break; 
            }
        }
    
        if (!produtoEncontrado) {
            alert("Produto não encontrado.");
        }
    }
    
  
    
 btnlist.addEventListener('click',listarProdutos);
 export function listarProdutos() {
    let listadeprod='';
    for (const produto of objDaloja) {
        for(const listar of produto){
            listadeprod+=`\n${listar} `;
     }

      
    };
alert('Lista de Produtos:' + listadeprod);      
    }
  
  
  
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
