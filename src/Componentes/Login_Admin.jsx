export default function LoginAdmin() {
    return (
      <div>
        <h2>Login Administrador</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email">Correo Gmail:</label>
          <br />
          <input type="email" id="email" name="email" required />
          <br /><br />
          <label htmlFor="password">Contraseña:</label>
          <br />
          <input type="password" id="password" name="password" required />
          <br /><br />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    );
  }
  