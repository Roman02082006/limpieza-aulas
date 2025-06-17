/*login usuario html*/
<!DOCTYPE html>
<html lang="es">
<head>
    <link rel="stylesheet" href="Login_Usuario.css" type="text/css" />
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Formulario de registro</title>
  <link rel="stylesheet" href="estilos.css" />
</head>
<body>
  <form class="formulario" action="/submit" method="POST">
    <h2>Registro</h2>
    <div class="campo">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" required />
    </div>

    <div class="campo">
      <label for="email">Correo Electrónico:</label>
      <input type="email" id="email" name="email" required />
    </div>

    <div class="campo">
      <label for="Contraseña">Contraseña</label>
      <textarea id="contraseña" name="contraseña" rows="0" required></textarea>
    </div>
    <button type="submit">Enviar</button>
  </form>
</body>
</html>