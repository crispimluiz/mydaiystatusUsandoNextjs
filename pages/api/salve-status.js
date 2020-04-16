import { db } from '../../lib/db'
import admin from 'firebase-admin'
import auth0 from "../../lib/auth0"

        const salveStatus = async(request, response) => {
        const session = await auth0.getSession(request)
        try{
        if(session){//verifica a sessão se logado Auth0
        const dados = request.body
        const today = new Date()//linha 9 e 10 para pegar a data
        const currentDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDay()
        await db//arrumando o banco de dados - colocando na estrutura
        .collection('markers')
        .doc(currentDate)
        .collection('checks')
        .doc('session.user.sub')
        .set({
            status: dados.status,//envia os dados
            user: session.user.sub,//envia o usuário
            coordinates: new admin.firestore.GeoPoint(
                //envia a localização
                dados.coords.lat,
                dados.coords.long
                ),
            });
        }
    } catch(error){
    console.error(error);
    res.status(error.status || 400).end(error.message);
    }
}
export default salveStatus