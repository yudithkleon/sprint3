import React from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { eliminarAsincrono } from "../actions/actionProducto";
import { DetalleAsincronico } from "../actions/actionProducto";
import ReactImageMagnify from "react-image-magnify";

export const ListarProducto = () => {
  const { producto } = useSelector((store) => store.producto);
  const dispatch = useDispatch();

  return (
    <div>
      <Table striped bordered hover>
        <thead></thead>
        <tbody>
          {producto ? (
            producto.map((prod, index) => (
              <tr key={index}>
                <td>
                  {/* <Link to="/detalle"><img src={prod.img1} width="290" height="250" /></Link> */}
                  {/* <a onClick="productos:state.productos.filter(produc => produc.codigo !== action.payload)"><img src={prod.img1} width="290" height="250" /></a> */}
                  <div style={{ width: "342px", height: "513px" }}>
                        <div>
                      <ReactImageMagnify
                        {...{
                          smallImage: {
                            alt: "Wristwatch by Ted Baker London",
                            isFluidWidth: true,
                            src:prod.img1
                          },
                          largeImage: {
                            src: prod.img1,
                            width: 1099,
                            height: 1428,
                          },
                        }}
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <h7 className="text-secondary ">Patrocinado.. </h7>
                  <br />
                  <Link to="/detalle">
                    <h5>{prod.nombres}</h5>
                  </Link>

                  <div className="text-warning">{prod.estrella}</div>
                  <h1 className="size-5">{prod.precio}</h1>
                  <h7 className="text-secondary">Envío Gratis a Colombia</h7>
                  <h6 className="text-danger">Solo quedan pocos en stock</h6>
                </td>
                <td></td>
              </tr>
            ))
          ) : (
            <p>No se cargan datos</p>
          )}
        </tbody>
      </Table>
    </div>
  );
};
