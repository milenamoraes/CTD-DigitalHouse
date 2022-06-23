var formData = {
    firstName: 'Milena',
    lastName: 'Moraes',
    email: 'miiiilenamoraesrc@gmail.com',
    password: '123456789'
}
var requestHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

// Variavel que irá conter o nosso objeto de configuração da requisição
var requestPostConfiguration = {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(formData)
}

// O Fetch é responsável por fazer uma requisição para um back-end
      // O parametro do fetch serve justamente para especificarmos aonde ele irá fazer a requisição
fetch('https://ctd-todo-api.herokuapp.com/v1/users', requestPostConfiguration).then(

    response => {

        response.json().then(

            success => {

                if(response.ok) {

                    // location.href

                } else {

                    if(success === 'El usuario ya se encuentra registrado') {

                        alert('O e-mail digitado ja esta cadastrado')
                    }

                }

            }

        )


    }

)