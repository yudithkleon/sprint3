import { typesUsuario } from "../types/types";
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

export const eliminarAsincrono = (email) => {
  return async (dispatch) => {
    const coleccion = collection(db, "usuarioCollection");
    // el 1er email es el firebase el 2do la operacion de comparacion y el 3ro la entrada que recibo
    const q = query(coleccion, where("email", "==", email));
    const resultado = await getDocs(q);
    resultado.forEach((elemento) => {
      deleteDoc(doc(db, "usuarioCollection", elemento.id));
    });
    dispatch(eliminarSincrono(email));
  };
};

export const eliminarSincrono = (email) => {
  return {
    type: typesUsuario.eliminar,
    payload: email,
  };
};

export const ListarAsincronico = () => {
  return async (dispatch) => {
    const datos = await getDocs(collection(db, "usuarioCollection"));
    const Usuariode = [];
    datos.forEach((documento) => {
      Usuariode.push({ ...documento.data() });
    });
    dispatch(ListarSincrono(Usuariode));
  };
};

export const ListarSincrono = (Usuario) => {
  return {
    type: typesUsuario.listar,
    payload: Usuario,
  };
};
export const UsuarioAsincronico = (nom, ape, email, pas1, pas2) => {
  return (dispatch) => {
    const Usuario = {
      nom,
      ape,
      email,
      pas1,
      pas2,
    };

    addDoc(collection(db, "usuarioCollection"), Usuario)
      .then((resp) => {
        dispatch(AgregarUsuario(Usuario));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const AgregarUsuario = (Usuario) => {
  return {
    type: typesUsuario.registro,
    payload: Usuario,
  };
};
