import React, {useEffect}from 'react'
import { useDispatch } from 'react-redux'
import { MostrarProducto } from './MostrarProducto'
import { NavBar1 } from './NavBar1'
import { ListarAsincronico } from '../actions/actionProducto'
import { ListarProducto } from './ListarProductos'


export const Principal = () => {

const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ListarAsincronico());
      }, []);


    return (
        <div>
            <NavBar1/>
        <ListarProducto/> 
        </div>
    )
}
