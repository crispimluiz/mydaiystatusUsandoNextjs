import auth0 from '../../lib/auth0'

//req e res é a abreviação de request e response
//quando a pessoa loga estamos enviando a pessoa para arquivo app
const callback = async(req, res) =>{
    await auth0.handleCallback(req, res, { redirectTo: '/app'})
}
export default callback
