var codigoturma = document.getElementById ('codigoturma');
var ano = document.getElementById ('ano');
var senha = document.getElementById('senha999');
var addButton = document.getElementById('addButton');

// Ao clicar no botão
addButton.addEventListener('click', function(){
    create(codigoturma.value, ano.value, senha.value);
});

function create(codigoturma, ano, senha){
    var data = {
        codigoturma: 'manga',
        ano: 'uva',
        senha:'maça'
    };

    return firebase.database().ref().child('turma').push(data);
}

// firebase.database().ref('turma').on('value', function (snapshot){
 //   usersList.innerHTML = '';
 //   snapshot.forEach(function (item){
 //       var li = document.createElement('li');
 //       li.appendChild(document.createTextNode(item.val().name + ': ' + item.val().age));
//        usersList.appendChild(li);
 //   });
// });
