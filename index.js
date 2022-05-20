function adicionar(){
    
    var dadosAdicionados = document.getElementById("texto").value;
    var dadosRecebidos = document.getElementById("lista").innerHTML;
    
    
    dadosRecebidos += Array = [dadosAdicionados] + '</br>' 
    console.log(dadosAdicionados)
    
    document.getElementById("lista").innerHTML = dadosRecebidos;
    
    }

    function limparDados(){
        document.getElementById("lista").innerHTML = '';
    }
    
    