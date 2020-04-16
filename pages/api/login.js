//request response
//async assíncrono

import auth0 from "../../lib/auth0"

//teste
const login = async(request, response) => {
    await auth0.handleLogin(request, response)//resolve nosso login!!!
}

export default login
