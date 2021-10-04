import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/actionLogin";
import { fileUpload } from "../helpers/FileUpload";
import {ProductoAsincronico, ListarAsincronico} from "../actions/actionProducto";
import { useForm } from "../hooks/useForm";
import { ListarProducto } from "./ListarProductos";
import { eliminarAsincrono } from "../actions/actionProducto";



export const Producto = (history) => {
  const dispatch = useDispatch();

  const [values, handleInputChange] = useForm({
    codigo: " ",
    nombres: " ",
    descripcion: " ",
    precio: " ",
    estrellas: " ",
    img1: " ",
    img2: "",
    img3: " ",
    img4: "",
  });
  let {
    codigo,
    nombres,
    descripcion,
    precio,
    estrellas,
    img1,
    img2,
    img3,
    img4,
  } = values;

  const handleRegistro = (e) => {
    e.preventDefault();
    dispatch(
      ProductoAsincronico(
        codigo,
        nombres,
        descripcion,
   
        precio,
        estrellas,
        img1,
        img3,
        img2,
        img4
      )
    );
  };

  const handleLogout = () => {
    dispatch(logout());
    history.replace("/login");
  };

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChanged1 = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then((response) => {
        img1 = response;
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
    
  };

  const handleFileChanged2 = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then((response) => {
        img2 = response;
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleFileChanged3 = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then((response) => {
        img3 = response;
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleFileChanged4 = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then((response) => {
        img4 = response;
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    dispatch(ListarAsincronico());
  }, []);

  return (
    <div className="container">
 
      <div className="row">
        <img
          className="text-center"
          src="https://res.cloudinary.com/danimel/image/upload/v1633143009/Sprint3/logo-amazon_jmuiav.png"
          width="70"
        />
      </div>
      <form onSubmit={handleRegistro}>
        <h1>Deseas Vender un Producto?</h1>
        <div className="form-group">
          <div className="form-group col-md-4">
            <label htmlFor="codigo">codigo</label>
            <input
              className="form-control"
              type="text"
              name="codigo"
              value={codigo}
              onChange={handleInputChange}
              id="codigo"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="nombres">Nombres</label>
            <input
              className="form-control"
              type="text"
              name="nombres"
              value={nombres}
              onChange={handleInputChange}
              id="nombres"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="descripcion">descripcion</label>
            <textarea
              className="form-control"
              type="text"
              name="descripcion"
              value={descripcion}
              onChange={handleInputChange}
              id="descripcion"
            />
          </div>
       
          <div className="form-group col-md-4">
            <label htmlFor="precio">Precio</label>
            <input
              className="form-control"
              type="text"
              name="precio"
              value={precio}
              onChange={handleInputChange}
              id="precio"
            />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="estrellas">Estrellas</label>
            <input
              className="form-control"
              type="text"
              name="estrellas"
              value={estrellas}
              onChange={handleInputChange}
              id="estrellas"
            />
          </div>
          <div className="form-group col-md-4">
            <input
              id="fileSelector"
              type="file"
              name="file"
              onChange={handleFileChanged1}
              style={{ display: "none" }}
            />
            
                        <button
              type="button"
              className="btn btn-success m-2"
              onClick={handlePictureClick}
            >
              Cargar Imagen 1
            </button>
          </div>

          <div className="form-group col-md-4">
            <input
              id="fileSelector"
              type="file"
              name="file"
              onChange={handleFileChanged2}
              style={{ display: "none" }}
            />
            <button
              type="button"
              className="btn btn-success m-2"
              onClick={handlePictureClick}
            >
              Cargar Imagen 2
            </button>
          </div>

          <div className="form-group col-md-4">
            <input
              id="fileSelector"
              type="file"
              name="file"
              onChange={handleFileChanged3}
              style={{ display: "none" }}
            />
            <button
              type="button"
              className="btn btn-success m-2"
              onClick={handlePictureClick}
            >
              Cargar Imagen 3
            </button>
          </div>
          
          <div className="form-group col-md-4">
            <input
              id="fileSelector"
              type="file"
              name="file"
              onChange={handleFileChanged4}
              style={{ display: "none" }}
            />
            <button
              type="button"
              className="btn btn-success m-2"
              onClick={handlePictureClick}
            >
              Cargar Imagen 4
            </button>
          </div>
          <div>
            <button className="btn btn-primary m-3">Guardar</button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary m-3"
              onClick={handleLogout}
            >
              Logout
            </button>
            <button
                    onClick={() => dispatch(eliminarAsincrono(codigo))}
                  >
                    Eliminar
                  </button>
                                  <button
                    onClick={() => dispatch(eliminarAsincrono(codigo))}
                  >
                    Modificar
                  </button>
          </div>
        </div>
      </form>

      <ListarProducto/> 
    </div>
  );
};
