import { typesUsuario } from "../types/types";

const initialState ={
    usuario: []
}

export const usuarioReducer = (state =initialState, action) =>{
    switch (action.type) {
        case typesUsuario.registro: 
        return {
            usuario: [action.payload]
        }
         
        case typesUsuario.listar:
            return{
                usuario:[...action.payload]
            }
        
            case typesUsuario.eliminar:
                return{
                    usuario:state.usuario.filter(user=> user.email !== action.payload)
                    
                }
        default:
           return state;
    }

}