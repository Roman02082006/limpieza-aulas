export default function LoginAdmin() {
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Formulario enviado correctamente");
    };
  
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Login Administrador</h2>
        <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>
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
  