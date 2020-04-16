import React, { useState }from 'react'
import auth0 from '../lib/auth0'
import axios from 'axios'

const CreateStatus = () =>{
    const [dados, setDados] = useState({
        status: 'bem',
        coords:{
            lat:null,
            long:null
        }
    })
    const getMyLocation = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position =>{
                setDados(old => {
                    return{
                        ...old,//dados antigos
                        coords:{
                            lat: position.coords.latitude,
                            long: position.coords.longitude
                        }
                    }
                })
            })
        }
    }

    const onStatusChange = evt =>{
        const value = evt.target.value
        setDados(old => {
            return{
                ...old,
                status:{
                    status: value
                }
            }
        })
    }

    const salve = async() =>{
       await axios.post('/api/salve-status', dados)
    }

    return (
        <div>
            <h1>Como você está? </h1>
            <label className='block'><input type='radio' name= 'status' value='bem' onClick={onStatusChange}/>
                Estou bem e nenhum sintoma.</label>
            <label className='block'><input type='radio' name= 'status' value='gripe'onClick={onStatusChange}/>
                Estou com sintomas de gripe/resfriado.</label>
            <label className='block'><input type='radio' name= 'status' value='covi-19'onClick={onStatusChange}/>
                Estou com sintomas de covid-19.</label>
            Sua posição atual: {JSON.stringify(dados)}
            <button onClick={getMyLocation}>Minha Localização</button>
            <button onClick={salve}>Salvar</button>
        </div>
    )
    
}
export default CreateStatus

//verifica que está logado (servidor)
export async function getServerSideProps ({ req, res }){
    const session = await auth0.getSession(req)

    if(session){
//return retorna quando está logado
    return{
        props:{
            //caso a pessoa não loge
            //se user for verdadeiro
            isAuth: true,
            user: session.user
        }
    }
}
//Quando não logado
    return{
        props:{//Caso a pessoa não logou volta falso
            isAuth: false,
            user: {}
        }
    }
}