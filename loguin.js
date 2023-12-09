let loginAttempts = 0;
const textDiv=document.querySelector('#tentativas');
function loginUser(username, password) {
    if (loginAttempts >= 3) {
        alert('Você atingiu o limite máximo de tentativas de login.');
        return;
    }
    
    fetch('users.csv') 
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            const headers = rows[0].split(',');

            const usernameIndex = headers.indexOf('username');
            const passwordIndex = 1;
            console.log(usernameIndex);
            for (let i = 1; i < rows.length; i++) {
                const userData = rows[i].split(',');
                if (userData[1] !== undefined) {
                    userData[1] = userData[1].replace('\r', '');
                }
                
                if (userData[usernameIndex] === username && userData[passwordIndex] === password) {
                    alert('Login bem-sucedido');

                    return window.location.href = "./pageEstoque.html"; ;
                }
            }
            loginAttempts++;
            textDiv.innerHTML = `Tentativas restantes: ${3 - loginAttempts}`;
            alert('Nome de usuário ou senha incorretos');
        });
}

document.querySelector('#loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    console.log(username,password)

    loginUser(username, password);
});

// ...

     /*   document.getElementById("loginForm").addEventListener("submit",  function(event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const senha = document.getElementById("password").value;
            
            if (username === usernamePadrao && senha === senhaPadrao) {
                window.location.href = "./pageEstoque.html"; 
                // Redirecionando para a pagina do estoque
            } 
            else {
                tentativas++;
               textDiv.innerHTML=`Login falhou. Tentativa # ${tentativas}`;
                //adiciona uma tentativa e coloca esse dado de forma visível no html
               setTimeout(()=>{
                if (tentativas >= 3) {
                    alert("Você excedeu o limite de tentativas de login. Tente novamente mais tarde.");
                    document.getElementById("username").disabled = true;
                    document.getElementById("password").disabled = true;
                    document.querySelector("button[type=submit]").disabled = true;
                }},100)
                //assim desabilita para o usuário digitar nos campos de nome e senha
                //fiz um setTimeout pq o alerta saia antes do textodiv ser atualizado
            }
        });*/
 