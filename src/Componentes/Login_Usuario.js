import React from 'react';
import './Login_Usuario.css';

function LoginUsuario() {
  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <form>
        <div className="form-group">
          <label htmlFor="usuario">Usuario</label>
          <input type="text" id="usuario" placeholder="Ingrese su usuario" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="Ingrese su contraseña" />
        </div>

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default LoginUsuario;