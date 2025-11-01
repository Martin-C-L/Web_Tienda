import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [carritoCantidad, setCarritoCantidad] = useState(0);

  useEffect(() => {
    const actualizarCantidadCarrito = () => {
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
      setCarritoCantidad(totalCantidad);
    };

    actualizarCantidadCarrito();

    const interval = setInterval(actualizarCantidadCarrito, 1000); // Actualización periódica

    return () => {
      clearInterval(interval);
    };
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className="d-flex justify-content-between align-items-center p-3" style={{ backgroundColor: '#222', color: '#fff', position: 'sticky', top: 0, zIndex: 1000 }}>
      <div className="d-flex align-items-center">
        <img src="https://img.freepik.com/premium-vector/level-up-icon-gaming-stick-game-vector-illustration_567423-383.jpg" alt="Level Up Logo" style={{ height: '40px', marginRight: '10px' }} />
        <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Level Up Gamer</h1>
      </div>

      <div className="d-flex align-items-center" style={{ flexGrow: 1, justifyContent: 'center' }}>
        <input
          type="text"
          placeholder="Busca aquí la tecnología para ti"
          className="form-control"
          style={{ maxWidth: '300px', marginRight: '10px', backgroundColor: '#fff', color: '#000' }}
        />
      </div>

      <div className="d-flex align-items-center position-relative" style={{ marginLeft: 'auto' }}>
        <button
          className="btn btn-link text-white"
          style={{ textDecoration: 'none' }}
          onClick={toggleMenu}
        >
          Hola, ingresa
        </button>
        {menuVisible && (
          <div
            className="dropdown-menu show"
            style={{ position: 'absolute', top: '50px', right: '0', backgroundColor: '#fff', color: '#000', borderRadius: '5px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', width: '150px' }}
          >
            <Link to="/login" className="dropdown-item">Inicia sesión</Link>
            <Link to="/registro" className="dropdown-item">Regístrate</Link>
          </div>
        )}
      </div>

      <div className="d-flex align-items-center">
        <Link to="/carrito" className="btn btn-link text-white" style={{ textDecoration: 'none', position: 'relative' }}>
          <i className="bi bi-cart" style={{ fontSize: '1.5rem', color: '#fff' }}></i>
          {carritoCantidad > 0 && (
            <span className="badge bg-success" style={{ position: 'absolute', top: '-5px', right: '-10px' }}>{carritoCantidad}</span>
          )}
        </Link>
      </div>
    </header>
  );
}

export default Header;