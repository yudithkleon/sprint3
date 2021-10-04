import { typesProducto } from "../types/types";

const initialState ={
    producto: []
}

export const productoReducer = (state =initialState, action) =>{
    switch (action.type) {
        case typesProducto.registro: 
        return {
            producto: [action.payload]
        }
         
        case typesProducto.listar:
            return{
                producto:[...action.payload]
            }

            case typesProducto.detalle:
                return{
                    producto:state.producto.filter(produc => produc.codigo !== action.payload)
                }

                case typesProducto.buscar:
                    return{
                        producto:state.producto.filter(produc => produc.nombres !== action.payload)
                    }

            case typesProducto.eliminar:
                return{
                    producto:state.producto.filter(produc => produc.codigo !== action.payload)
                    
                }
        default:
           return state;
    }

}