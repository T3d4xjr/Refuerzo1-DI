export default function UserCard({ usuario }) {
    return (
      <div className="tarjeta-usuario">
        <h2>{usuario.name}</h2>
        <p>Correo: {usuario.email}</p>
        <p>Usuario: {usuario.username}</p>
      </div>
    );
  }
  