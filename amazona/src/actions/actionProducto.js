import { typesProducto } from "../types/types";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";


//Eliminar//////////////////////////////////////////////////////
export const eliminarAsincrono = (codigo) => {
  return async (dispatch) => {
    const coleccion = collection(db, "CollectionProducto");
    // el 1er codigo es el firebase el 2do la operacion de comparacion y el 3ro la entrada que recibo
    const q = query(coleccion, where("codigo", "==", codigo));
    const resultado = await getDocs(q);
    resultado.forEach((elemento) => {
      deleteDoc(doc(db, "CollectionProducto", elemento.id));
      console.log(elemento.id)
    });
    dispatch(eliminarSincrono(codigo));
  };
};

export const eliminarSincrono = (codigo) => {
  return {
    type: typesProducto.eliminar,
    payload: codigo,
  };
};

//Buscar//////////////////////////////////////////////////////
export const buscarAsincrono = (nombres) => {
  return async (dispatch) => {
    const coleccion = collection(db, "CollectionProducto");
    // el 1er codigo es el firebase el 2do la operacion de comparacion y el 3ro la entrada que recibo
    const q = query(coleccion, where("nombres", "==", nombres));
    const resultado = await getDocs(q);
    resultado.forEach((elemento) => {
      getDocs(doc(db, "CollectionProducto", elemento.id));
      console.log(elemento.id)
      
    });
    dispatch(buscarSincrono(nombres));
  };
};

export const buscarSincrono = (nombres) => {
  return {
    type: typesProducto.buscar,
    payload: nombres,
  };
};




//Listar/////////////////////////////////////////////////////
export const ListarAsincronico = () => {
  return async (dispatch) => {
    const datos = await getDocs(collection(db, "CollectionProducto"));
    const prod = [];
    datos.forEach((documento) => {
      prod.push({ ...documento.data() });
    });
    dispatch(ListarSincrono(prod));
  };
};

export const ListarSincrono = (producto) => {
  return {
    type: typesProducto.listar,
    payload: producto,
  };
};
//Mostrar Producto//////////////////////////////////////////////////////
export const DetalleAsincronico = () => {
  return async (dispatch) => {
    const datos = await getDocs(collection(db, "CollectionProducto"));
    const prod = [];
    datos.forEach((documento) => {
      prod.push({ ...documento.data() });
    });
    dispatch(DetalleSincrono(prod));
  };
};

export const DetalleSincrono=(producto) => {
  return {
    type: typesProducto.detalle,
    payload: producto,
  };
};


//Agregar Producto//////////////////////////////////////////////////////
export const ProductoAsincronico = (
  codigo,
  nombres,
  descripcion,
  precio,
  estrellas,
  img1,
  img3,
  img2,
  img4,
) => {
  return (dispatch) => {
    const producto = {
      codigo,
      nombres,
      descripcion,
      precio,
      estrellas,
      img1,
      img3,
      img2,
      img4,
    };

    addDoc(collection(db, "CollectionProducto"), producto)
      .then((resp) => {
        dispatch(AgregarProducto(producto));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};



export const AgregarProducto = (producto) => {
  return {
    type: typesProducto.registro,
    payload: producto,
  };
};
