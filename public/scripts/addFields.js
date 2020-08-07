//procurar botao
document.querySelector("#add-time")
    //quando clicar no botao
    .addEventListener('click', cloneField)


//executa uma ação
function cloneField() {
    //duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    fields.forEach(function(field) {
        field.value = ""
    });

    //colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}



