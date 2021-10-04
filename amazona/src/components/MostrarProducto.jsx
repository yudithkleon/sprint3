import React, {useEffect } from "react";
import {useSelector, useDispatch} from "react-redux"
import { Row, Col, Card, Table} from "react-bootstrap";

export const MostrarProducto = () => {
  
  const {productos}= useSelector((store) => store.producto);
  
  const dispatch = useDispatch();


  return (
    <div>
      <br />
         <div >
        {
        productos ? (
        productos.map((prod, index)=> (
          <Card key={index}>
            <Row className="mt-7 md-5">
              <Col ml-5 sm={4}>
                <img src={prod.img1} width="290" height="250"/>
              </Col>
              <Col sm={8}>
                <h7 className="text-secondary ">Patrocinado.. </h7>
                <br />
                <h1>{prod.nombres}</h1>
                <div className="text-warning">{prod.estrella}</div>
                <h1 className="size-5">{prod.precio}</h1>
                <h7 className="text-secondary">Envío Gratis a Colombia</h7>
                <h6 className="text-danger">Solo quedan pocos en stock</h6>
              </Col>
            </Row>
          </Card>
        ))
         )
         : (
            <p>No se cargan datos</p>
          )
}
</div>
    </div>
  );
};
