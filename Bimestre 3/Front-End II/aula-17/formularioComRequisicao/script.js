const createUserButtonElement = document.querySelector('#createUserButton')
// Obtenção de Todos os Inputs do meu HTML em formato de Array
const allInputsElements = document.querySelectorAll('input')

createUserButtonElement.addEventListener('click', event => {

    event.preventDefault()

    createUser()

})

for(let input of allInputsElements) {

    input.addEventListener('keyup', event => {

        const inputValue = input.value
        const inputId = input.id

        formData[inputId] = inputValue

        console.log(formData)

    })

}

var formData = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

var requestHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

// Variavel que irá conter o nosso objeto de configuração da requisição
var requestPostConfiguration = {
    method: 'POST',
    headers: requestHeaders
}

function createUser() {

    requestPostConfiguration.body = JSON.stringify(formData)

// O Fetch é responsável por fazer uma requisição para um back-end
      // O parametro do fetch serve justamente para especificarmos aonde ele irá fazer a requisição
      fetch('https://ctd-todo-api.herokuapp.com/v1/users', requestPostConfiguration).then(

        response => {

            response.json().then(

                info => {

                    if(response.ok == true) {

                        alert('Parabnes! Usuário criado com sucesso.')

                    } else {

                        if(info === 'El usuario ya se encuentra registrado') {

                            alert('O e-mail digitado ja esta cadastrado')

                        }

                    }

                }

            )

        }

    )

}