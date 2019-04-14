/*---------------------------*\
           REQUERID
\*---------------------------*/

/*------ BOOK ------*/

function checkingBook() {
    var inputsBook =  document.querySelectorAll('input.checkbook-js');
    var errorMsgBook = document.querySelectorAll('p.errorcheckbook-js');
    
    for (i = 0; i < inputsBook.length; i++) {
        var formBook = inputsBook[i].value;
        if (formBook == '') {
            errorMsgBook[i].innerHTML = 'Campo obrigatório!';
        } else {
            errorMsgBook[i].innerHTML = '';
        }
    }
}

/*------ STUDENT ------*/

function checkingStudent() {
    var inputsStudent =  document.querySelectorAll('input.checkstudent-js');
    var errorMsgStudent = document.querySelectorAll('p.errorcheckstudent-js');
    
    for (i = 0; i < inputsStudent.length; i++) {
        var formStudent = inputsStudent[i].value;
        if (formStudent == '') {
            errorMsgStudent[i].innerHTML = 'Campo obrigatório!';
        } else {
            errorMsgStudent[i].innerHTML = '';
        }
    }
}

/*------ CLASS(turma) ------*/

function checkingClass(e) {
    //e.preventDefault();

    var inputsClass =  document.querySelectorAll('input.checkclass-js');
    var errorMsgClass = document.querySelectorAll('p.errorcheckclass-js');
    
    for (i = 0; i < inputsClass.length; i++) {
        var formClass = inputsClass[i].value;
        if (formClass == '') {
            errorMsgClass[i].innerHTML = 'Campo obrigatório!';
        } else {
            errorMsgClass[i].innerHTML = '';
        }
    }
}




/*---------------------------*\
         ONLY NUMBERS
\*---------------------------*/
function onlyNumbers(e) {
    var tecla = (window.event) ?event.keyCode: e.which;   
    
    if((tecla > 47 && tecla < 58)) return true;
        else {
    if (tecla == 8 || tecla == 0) return true;
        else return false;
    }
}


/*---------------------------*\
             MASKS
\*---------------------------*/

// ISBN Mask
$('#isbn').mask('000-0-00-000000-0');

// PHONE Mask
$('#telefone').mask('(00) 00000-0000');

// CLASS CODE Mask
$('#codigoturma').mask('A/000-00', {
    translation: {
        'A': {
            pattern: /[M T]/
        }
    }
});


