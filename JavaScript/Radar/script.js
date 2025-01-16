function radar(){
   var velocidade =  document.getElementById('vel').value;
   

    if (velocidade >= 80) {
        document.getElementById('texto').innerHTML = (velocidade + 'KM/H está acima da velocidade');
            
    }
    
    if (velocidade <= 79) {
        document.getElementById('texto').innerHTML = (velocidade + 'KM/H está abaixo da velocidade');
    }
    

    
}