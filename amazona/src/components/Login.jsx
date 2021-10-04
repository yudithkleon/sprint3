import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginGoogle, loginEmailPassword } from "../actions/actionLogin";
import { useForm } from "../hooks/useForm";

function Login() {
  const dispatch = useDispatch();

  const [values, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginEmailPassword(email, password));
  };

  const handleGoogle = () => {
    dispatch(loginGoogle());
  };

  return (
    <div className="container">
      <div className="row">
        <img
          className="text-center"
          width="60"
          height="90"
          src="https://res.cloudinary.com/danimel/image/upload/v1633143009/Sprint3/logo-amazon_jmuiav.png"
        />
      </div>

      <Form onSubmit={handleLogin} className="m-10">
        <Form.Group className=" m-9" controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <div>
          <Button className="m-2" variant="primary" type="submit">
            Enviar
          </Button>
          <Button variant="online-primary">
            <Container className="auth__social-networks m-2">
              <Container className="google-btn" onClick={handleGoogle}>
                <Container className="google-icon-wrapper">
                  <img
                    className="google-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="google button"
                  />
                </Container>
              </Container>
            </Container>
          </Button>
          <Button className="m-2" variant="online-primary">
            <Link to="/FormAgregar">Registrarse</Link>
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
