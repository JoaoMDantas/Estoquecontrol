       //nome e senha padrão para o primeiro sprint
       const usernamePadrao='admin';
       const senhaPadrao='@admiN';
        const textDiv=document.getElementById('tentativas');
        //contador de tentativas
        let tentativas = 0;
        // Função para processar o formulário de login
        document.getElementById("loginForm").addEventListener("submit",  function(event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const senha = document.getElementById("password").value;
            
            if (username === usernamePadrao && senha === senhaPadrao) {
                window.location.href = "./public/index.html"; 
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
        });
 