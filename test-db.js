const admin = require('firebase-admin')
const secret = require('./firebase-secret.json')
const { GeoFirestore } = require('geofirestore')

admin.initializeApp({
    credential: admin.credential.cert(secret)
})

const db = admin.firestore();
const dbgeo = new GeoFirestore(db);//dados do db para o dbgeo

dbgeo//uso o dbgeo agora
    .collection('test')
    .add({//campo
        test: 1,
        coordinates: new admin.firestore.GeoPoint(-20.21899,-45.93906)//coordenadas
    }).then(()=> {//valor
        console.log('ok')
    })
