import logo from "../logoa.png";


function Menu() {
  return (
    <nav class="navbar navbar-dark bg-black">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <ul class="nav justify-content-center">
      <li class="nav-item">
          <a class="nav-link active" href="/">
            Inicio
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/empleados">
            Empleados
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/view">
            Autos
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/store">
            Carrito
          </a>
          </li>
      </ul>
    </nav>
  );
}

export default Menu;
