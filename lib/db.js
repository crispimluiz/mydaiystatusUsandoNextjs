const admin = require('firebase-admin')
const secret = require('../firebase-secret.json')
const { GeoFirestore } = require('geofirestore')

//se não tem inicializa
if(!admin.apps.length){
    admin.initializeApp({
    credential: admin.credential.cert(secret)
    })
}

const firestore = admin.firestore();
const db = new GeoFirestore(firestore);
//Já temos como acessar nosso banco!
module.exports = {
    db
}