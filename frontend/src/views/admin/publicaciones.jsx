import axios from "axios";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";

const Publicaciones = () => {
  const { state } = useContext(UserContext);

  const fetchPublicaciones = async () => {
    try {
      const token = state.token; // Obtén el token del contexto de usuario

      const response = await axios.get("http://localhost:3000/publicaciones", {
        headers: {
          Authorization: `Bearer ${token}`, // Agrega el token en el encabezado
        },
      });

      console.log("Publicaciones:", response.data);
    } catch (error) {
      console.error("Error al obtener publicaciones:", error);
      // Manejo de errores, como mostrar un mensaje de error
    }
  };

  useEffect(() => {
    if (state.token) { // Solo llama a fetchPublicaciones si hay un token
      fetchPublicaciones();
    }
  }, [state.token]);

  return (
    <div>
      <h1>Publicaciones</h1>
      {/* Renderiza las publicaciones aquí */}
    </div>
  );
};

export default Publicaciones;
