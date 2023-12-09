import { total, qtd, select, objDaloja } from './Nomesprod';

const category = document.querySelector(".category");
const names = document.querySelector(".names");

const categories = [
    {
        value: "equips",
        label: "Acessórios e Equipamentos Esportivos"
    },
    {
        value: "suplementos",
        label: "Suplementos e Nutrição"
    },
    {
        value: "protect",
        label: "Acessórios de Proteção"
    }
];

const minStock = {
    equips: 1000,
    suplementos: 2000,
    protect: 750
};

const stock = {
    equips: 700,
    suplementos: 1500,
    protect: 300
};

let totalStock = 2500;
total.innerHTML = totalStock;

function calculatePercentage(x, y) {
    let result = (x / y) * 100;
    return `${result.toFixed(2)}%`;
}

export default select.addEventListener('change', () => {
    const selectedCategory = category.value;
    const selectedName = names.value;

    if (selectedCategory && selectedName) {
        stock[selectedCategory] += Number(qtd.value);
        totalStock += Number(qtd.value);
        total.innerHTML = totalStock;

        if (stock[selectedCategory] > minStock[selectedCategory]) {
            alert(`Estoque acima do mínimo. Estoque atual: ${stock[selectedCategory]}`);
        } else {
            alert(`Estoque mínimo atingido. Estoque atual: ${stock[selectedCategory]}`);
        }

        updatePercentage();
    }
});

function updatePercentage() {
    categories.forEach(category => {
        const categoryName = category.value;
        const categoryLabel = category.label;
        eqp.innerHTML = `${categoryLabel} ${calculatePercentage(stock[categoryName], totalStock)}`;
    });
}

category.addEventListener('change', prencher)
export function prencher() {
    const selectedCategory = category.value;

    if (selectedCategory) {
        names.disabled = false;
        populateNames(selectedCategory);
    }
};

function populateNames(selectedCategory) {
    names.remove(names);
    console.log(selectedCategory);
    console.log(objDaloja[0]);
    objDaloja[0].forEach(name => {
        names.innerHTML += `<option value="${name}">${name}</option>`;
    });

    names.innerHTML += "<option value='new obj'>Adicione um novo item</option>";
}

names.addEventListener('change', () => {
    if (names.value === 'new obj') {
        addNewProduct(selectedCategory);
    }
});

function addNewProduct(selectedCategory) {
    while (true) {
        const newProduct = prompt("Digite o nome do novo produto:");
        if (newProduct === null || newProduct === '') {
            break;
        }

        objDaloja[selectedCategory].push(newProduct);
        populateNames(selectedCategory);
    }
}

removebtn.addEventListener('click', () => {
    const nameToRemove = prompt("Digite o nome do produto a ser excluído:");

    if (nameToRemove) {
        const selectedCategory = category.value;
        const index = objDaloja[selectedCategory].indexOf(nameToRemove);

        if (index !== -1) {
            objDaloja[selectedCategory].splice(index, 1);
            alert("Produto excluído com sucesso.");
            populateNames(selectedCategory);
        } else {
            alert("Produto não encontrado.");
        }
    }
});

listarbtn.addEventListener('click', () => {

    let report = 'Relatório de Estoque:\n\n';

    categories.forEach(category => {
        const categoryName = category.value;
        report += `Categoria: ${category.label}\n`;

        objDaloja.forEach(product => {
            report += `- ${product}\n`;
        });

        report += '\n';})
        const blob = new Blob([report], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'relatorio_estoque.txt';
        a.click();
   /* categories.forEach(category => {
        const categoryName = category.value;
        productList.push(...objDaloja);
    });

    alert('Lista de Produtos: ' + productList.join('\n\n'));*/
});
