function acaoCalc(tipo, valor) {
    if (tipo === 'acao'){
        //clear
        if (valor === 'c'){
            document.getElementById('resultado').value = ''
        }
        //botoes funcoes
        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value +=  valor
        }
        //valor calculo
        if (valor === "="){
           let valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo;
            
        }
        
    }else if (tipo === 'valor'){
        //dar o valor
        document.getElementById('resultado').value +=  valor
    }
}