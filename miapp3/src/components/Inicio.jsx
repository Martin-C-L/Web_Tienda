import React from 'react';
import { Link } from 'react-router-dom';

// Se define el estilo como clase global o constante si es necesario, pero es mejor usar clases de Bootstrap
const linkStyle = {
  background: '#222',
  color: '#fff',
  fontFamily: 'Roboto, Arial, sans-serif',
  padding: '10px 22px',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: 'bold',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  transition: 'background 0.2s',
};

function Inicio() {
  return (
    // Se usa un contenedor de Bootstrap para centrar el contenido y asegurar márgenes responsivos
    <div className="container mt-5">
      
      {/* Botones de navegación: Usan Bootstrap para alinearse en una fila */}
      <div className="d-flex flex-wrap justify-content-center mb-5 gap-2">
        <Link to="/catalogo" className="btn btn-dark">Catálogo</Link>
        <Link to="/login" className="btn btn-dark">Iniciar sesión</Link>
      </div>

      {/* Contenido principal centrado */}
      <div className="text-center">
        <h1 className="display-4">Level Up Gamer</h1>
        {/* img-fluid de Bootstrap asegura que la imagen no se desborde */}
        <img 
          src="https://img.freepik.com/premium-vector/level-up-icon-gaming-stick-game-vector-illustration_567423-383.jpg" 
          alt="leveluplogo" 
          className="img-fluid mt-4" 
          style={{ maxWidth: '300px', height: 'auto' }} 
        />
      </div>
    </div>
  );
}

export default Inicio;
