
function fruta() {
    var fruta = document.getElementById('text').value;

    switch (fruta){
        case 'Banana': document.getElementById('resultado').innerHTML = ('Banana é uma fruta amarela e tem formato de Lua.');
        break

        case 'Uva' : document.getElementById('resultado').innerHTML = ('Uva é uma fruta roxa e tem formato esférico.');
        break

        case 'Morango' : document.getElementById('resultado').innerHTML = ('Morango é uma fruta vermelha e tem um formato esquisto.');
        break

        case 'Manga' : document.getElementById('resultado').innerHTML = ('Manga é uma fruta amarela/laranja que é muito doce.');
        break
    };
};
